const mongoose = require('mongoose');

const surveyResponseSchema = new mongoose.Schema({
  // 问卷版本信息
  surveyVersion: {
    type: String,
    required: true
  },
  surveyId: {
    type: String,
    required: true,
    default: 'default-survey'
  },
  surveyTitle: {
    type: String,
    required: true
  },

  // 回答者信息
  respondent: {
    name: String,
    age: String
  },

  // 问卷答案（使用版本化的结构）
  answers: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true
  },

  // 原始答案（保留原始数据以供迁移）
  rawAnswers: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true
  },

  // 元数据
  metadata: {
    startTime: {
      type: Date,
      default: Date.now
    },
    completionTime: {
      type: Date,
      required: true,
      default: Date.now
    },
    userAgent: String,
    ipAddress: String,
    migrated: {
      type: Boolean,
      default: false
    },
    migrationHistory: [{
      fromVersion: String,
      toVersion: String,
      migratedAt: {
        type: Date,
        default: Date.now
      },
      changes: [{
        field: String,
        oldValue: mongoose.Schema.Types.Mixed,
        newValue: mongoose.Schema.Types.Mixed
      }]
    }]
  }
}, {
  timestamps: true,
  
  indexes: [
    { surveyId: 1 },
    { surveyVersion: 1 },
    { 'respondent.age': 1 },
    { createdAt: 1 }
  ]
});

// 添加用于统计的静态方法（按版本）
surveyResponseSchema.statics.getAgeDistribution = async function(surveyId, version) {
  const match = version ? { surveyId, surveyVersion: version } : { surveyId };
  return this.aggregate([
    { $match: match },
    { $group: {
      _id: '$respondent.age',
      count: { $sum: 1 }
    }},
    { $sort: { '_id': 1 } }
  ]);
};

// 获取满意度统计（按版本）
surveyResponseSchema.statics.getSatisfactionStats = async function(surveyId, version) {
  const match = version ? { surveyId, surveyVersion: version } : { surveyId };
  return this.aggregate([
    { $match: match },
    { $group: {
      _id: '$answers.satisfaction',
      count: { $sum: 1 }
    }},
    { $sort: { '_id': 1 } }
  ]);
};

// 获取功能偏好统计（按版本）
surveyResponseSchema.statics.getFeaturePreferences = async function(surveyId, version) {
  const match = version ? { surveyId, surveyVersion: version } : { surveyId };
  return this.aggregate([
    { $match: match },
    { $unwind: '$answers.features' },
    { $group: {
      _id: '$answers.features',
      count: { $sum: 1 }
    }},
    { $sort: { count: -1 } }
  ]);
};

// 获取版本比较统计
surveyResponseSchema.statics.getVersionComparison = async function(surveyId, versions) {
  return this.aggregate([
    { $match: { 
      surveyId,
      surveyVersion: { $in: versions }
    }},
    { $group: {
      _id: '$surveyVersion',
      responseCount: { $sum: 1 },
      avgSatisfaction: { $avg: '$answers.satisfaction' }
    }},
    { $sort: { '_id': 1 } }
  ]);
};

// 数据迁移方法
surveyResponseSchema.methods.migrateToVersion = async function(newVersion, migrationRules) {
  const oldVersion = this.surveyVersion;
  const oldAnswers = { ...this.answers };
  
  // 应用迁移规则
  for (const [field, rule] of Object.entries(migrationRules)) {
    if (typeof rule === 'function') {
      this.answers.set(field, rule(this.rawAnswers.get(field)));
    } else {
      this.answers.set(field, rule);
    }
  }

  // 记录迁移历史
  this.metadata.migrated = true;
  this.metadata.migrationHistory.push({
    fromVersion: oldVersion,
    toVersion: newVersion,
    changes: Object.keys(migrationRules).map(field => ({
      field,
      oldValue: oldAnswers[field],
      newValue: this.answers.get(field)
    }))
  });

  this.surveyVersion = newVersion;
  return this.save();
};

// 批量迁移方法
surveyResponseSchema.statics.bulkMigrate = async function(fromVersion, toVersion, migrationRules) {
  const responses = await this.find({ surveyVersion: fromVersion });
  const migrations = responses.map(response => 
    response.migrateToVersion(toVersion, migrationRules)
  );
  return Promise.all(migrations);
};

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);
module.exports = SurveyResponse;