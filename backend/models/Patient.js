const mongoose = require('mongoose');
const s = new mongoose.Schema({
  name: String, age: Number, gender: String,
  disease: String, doctor: String,
  status: { type: String, default: 'Admitted' },
  phone: String
}, { timestamps: true });
module.exports = mongoose.model('Patient', s);