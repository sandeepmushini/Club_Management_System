const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    question: String,
    answer: String,
    category: String,
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('FAQ', FAQSchema);