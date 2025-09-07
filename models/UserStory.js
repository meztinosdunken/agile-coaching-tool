const mongoose = require('mongoose');

const userStorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: Number, default: 1 },
  status: { type: String, enum: ['backlog', 'in-progress', 'done'], default: 'backlog' },
  assignedTo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('UserStory', userStorySchema);