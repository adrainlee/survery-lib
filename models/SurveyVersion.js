const mongoose = require('mongoose');

const surveyVersionSchema = new mongoose.Schema({
  version: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  config: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  validFrom: {
    type: Date,
    default: Date.now
  },
  validTo: Date,
  
  // 变更记录
  changes: [{
    field: String,
    oldValue: mongoose.Schema.Types.Mixed,
    newValue: mongoose.Schema.Types.Mixed,
    changedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});