import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/appointments';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ patientName:'', doctorName:'', date:'', time:'', reason:'', status:'Scheduled' });
  const [error, setError] = useState('');

  const fetchAppointments = () => axios.get(API).then(r => setAppointments(r.data));
  useEffect(() => { fetchAppointments(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault(); setError('');
    try {
      await axios.post(API, form);
      setForm({ patientName:'', doctorName:'', date:'', time:'', reason:'', status:'Scheduled' });
      fetchAppointments();
    } catch (err) { setError(err.response?.data?.error || 'Error'); }
  };

  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`);
    fetchAppointments();
  };

  const statusColor = s => ({ Scheduled:'#1565c0', Completed:'#2e7d32', Cancelled:'#e53935' }[s] || '#888');

  return (
    <div>
      <div className="page-title">📅 Appointment Management</div>
      <div className="form-box">
        <h3>➕ Book New Appointment</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input name="patientName" placeholder="Patient Name" value={form.patientName} onChange={handleChange} required />
            <input name="doctorName"  placeholder="Doctor Name"  value={form.doctorName}  onChange={handleChange} required />
            <input name="date" type="date" value={form.date} onChange={handleChange} required />
            <input name="time" type="time" value={form.time} onChange={handleChange} required />
            <input name="reason" placeholder="Reason for Visit" value={form.reason} onChange={handleChange} required />
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Scheduled</option><option>Completed</option><option>Cancelled</option>
            </select>
          </div>
          <button type="submit" className="btn-add">Book Appointment</button>
        </form>
      </div>
      <div className="table-box">
        <h3>📋 Appointment Records ({appointments.length})</h3>
        <table>
          <thead>
            <tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Reason</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {appointments.map(a => (
              <tr key={a._id}>
                <td>{a.patientName}</td><td>{a.doctorName}</td>
                <td>{a.date}</td><td>{a.time}</td><td>{a.reason}</td>
                <td><span className="badge" style={{ backgroundColor: statusColor(a.status) }}>{a.status}</span></td>
                <td><button className="btn-del" onClick={() => handleDelete(a._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}