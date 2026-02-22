const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
router.get('/', async (req, res) => {
  try { res.json(await Doctor.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try { const d = new Doctor(req.body); await d.save(); res.json(d); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Doctor.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;