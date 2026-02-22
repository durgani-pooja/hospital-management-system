const mongoose = require('mongoose');
const s = new mongoose.Schema({
  patientName: String, doctorName: String,
  date: String, time: String, reason: String,
  status: { type: String, default: 'Scheduled' }
}, { timestamps: true });
module.exports = mongoose.model('Appointment', s);