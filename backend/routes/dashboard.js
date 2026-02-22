const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
router.get('/', async (req, res) => {
  try {
    res.json({
      totalPatients: await Patient.countDocuments(),
      totalDoctors: await Doctor.countDocuments(),
      totalAppointments: await Appointment.countDocuments(),
      admitted: await Patient.countDocuments({ status: 'Admitted' }),
      discharged: await Patient.countDocuments({ status: 'Discharged' }),
      outpatient: await Patient.countDocuments({ status: 'OutPatient' }),
      scheduled: await Appointment.countDocuments({ status: 'Scheduled' }),
      availableDoctors: await Doctor.countDocuments({ available: true })
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;