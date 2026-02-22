const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.get('/', async (req, res) => {
  try { res.json(await Appointment.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try { const d = new Appointment(req.body); await d.save(); res.json(d); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Appointment.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;