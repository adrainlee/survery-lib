require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SurveyResponse = require('./models/SurveyResponse');
const SurveyVersion = require('./models/SurveyVersion');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 连接数据库
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB 连接成功'))
.catch(err => console.error('MongoDB 连接失败:', err));

// API 路由

// 问卷版本管理 API

// 创建新版本
app.post('/api/versions', async (req, res) => {
  try {
    const { version, title, description, config } = req.body;

    // 停用当前活跃版本
    await SurveyVersion.updateMany(
      { active: true },
      { 
        active: false,
        validTo: new Date()
      }
    );

    // 创建新版本
    const surveyVersion = new SurveyVersion({
      version,
      title,
      description,
      config,
      active: true
    });

    await surveyVersion.save();
    res.status(201).json(surveyVersion);
  } catch (error) {
    console.error('创建版本失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取当前活跃版本
app.get('/api/versions/active', async (req, res) => {
  try {
    const activeVersion = await SurveyVersion.findOne({ active: true });
    if (!activeVersion) {
      return res.status(404).json({ error: '未找到活跃版本' });
    }
    res.json(activeVersion);
  } catch (error) {
    console.error('获取活跃版本失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取所有版本
app.get('/api/versions', async (req, res) => {
  try {
    const versions = await SurveyVersion.find().sort({ validFrom: -1 });
    res.json(versions);
  } catch (error) {
    console.error('获取版本列表失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 数据迁移 API

// 执行数据迁移
app.post('/api/migrate', async (req, res) => {
  try {
    const { fromVersion, toVersion, migrationRules } = req.body;

    // 验证版本存在
    const [sourceVersion, targetVersion] = await Promise.all([
      SurveyVersion.findOne({ version: fromVersion }),
      SurveyVersion.findOne({ version: toVersion })
    ]);

    if (!sourceVersion || !targetVersion) {
      return res.status(404).json({ error: '版本不存在' });
    }

    // 执行批量迁移
    await SurveyResponse.bulkMigrate(fromVersion, toVersion, migrationRules);

    res.json({ message: '数据迁移成功' });
  } catch (error) {
    console.error('数据迁移失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 保存问卷响应
app.post('/api/responses', async (req, res) => {
  try {
    const {
      surveyTitle,
      respondent,
      answers
    } = req.body;

    // 获取当前活跃版本
    const activeVersion = await SurveyVersion.findOne({ active: true });
    if (!activeVersion) {
      return res.status(404).json({ error: '未找到活跃的问卷版本' });
    }

    const response = new SurveyResponse({
      surveyVersion: activeVersion.version,
      surveyTitle,
      respondent,
      answers,
      rawAnswers: answers, // 保存原始答案
      metadata: {
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip
      }
    });

    await response.save();
    res.status(201).json({ message: '问卷提交成功', id: response._id });
  } catch (error) {
    console.error('保存问卷失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取统计数据（支持版本筛选）
app.get('/api/statistics', async (req, res) => {
  try {
    const { version } = req.query;
    const surveyId = 'default-survey';
    
    // 并行获取所有统计数据
    const [
      ageDistribution,
      satisfactionStats,
      featurePreferences,
      totalResponses,
      versionComparison
    ] = await Promise.all([
      SurveyResponse.getAgeDistribution(surveyId, version),
      SurveyResponse.getSatisfactionStats(surveyId, version),
      SurveyResponse.getFeaturePreferences(surveyId, version),
      version 
        ? SurveyResponse.countDocuments({ surveyId, surveyVersion: version })
        : SurveyResponse.countDocuments({ surveyId }),
      version
        ? SurveyResponse.getVersionComparison(surveyId, [version])
        : SurveyResponse.getVersionComparison(surveyId, 
            (await SurveyVersion.find().select('version')).map(v => v.version)
          )
    ]);

    res.json({
      totalResponses,
      ageDistribution,
      satisfactionStats,
      featurePreferences,
      versionComparison
    });
  } catch (error) {
    console.error('获取统计数据失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取所有回复（支持版本筛选）
app.get('/api/responses', async (req, res) => {
  try {
    const { page = 1, limit = 10, version } = req.query;
    const skip = (page - 1) * limit;

    const query = version ? { surveyVersion: version } : {};

    const responses = await SurveyResponse.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .select('-__v');

    const total = await SurveyResponse.countDocuments(query);

    res.json({
      responses,
      total,
      pages: Math.ceil(total / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    console.error('获取回复列表失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 导出原始数据（支持版本筛选）
app.get('/api/export', async (req, res) => {
  try {
    const { version } = req.query;
    const query = version ? { surveyVersion: version } : {};

    const responses = await SurveyResponse.find(query)
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json(responses);
  } catch (error) {
    console.error('导出数据失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});