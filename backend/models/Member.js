const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: String,
    role: String,
    email: String,
    year: Number
});

module.exports = mongoose.model('Member', MemberSchema);