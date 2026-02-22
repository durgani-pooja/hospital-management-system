const mongoose = require('mongoose');
const s = new mongoose.Schema({
  name: String, specialization: String,
  phone: String, email: String,
  available: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model('Doctor', s);