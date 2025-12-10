const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    imageUrl: String,
    tags: [String],
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);