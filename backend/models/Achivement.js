const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    imageUrl: String
});

module.exports = mongoose.model('Achievement', AchievementSchema);