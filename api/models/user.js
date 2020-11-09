const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('user', userSchema);
