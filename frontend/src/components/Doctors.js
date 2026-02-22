import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/doctors';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ name:'', specialization:'', phone:'', email:'', available: true });
  const [error, setError] = useState('');

  const fetchDoctors = () => axios.get(API).then(r => setDoctors(r.data));
  useEffect(() => { fetchDoctors(); }, []);

  const handleChange = e => {
    const val = e.target.name === 'available' ? e.target.value === 'true' : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  };

  const handleSubmit = async e => {
    e.preventDefault(); setError('');
    try {
      await axios.post(API, form);
      setForm({ name:'', specialization:'', phone:'', email:'', available: true });
      fetchDoctors();
    } catch (err) { setError(err.response?.data?.error || 'Error'); }
  };

  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`);
    fetchDoctors();
  };

  return (
    <div>
      <div className="page-title">👨‍⚕️ Doctor Management</div>
      <div className="form-box">
        <h3>➕ Add New Doctor</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input name="name"           placeholder="Doctor Name"    value={form.name}           onChange={handleChange} required />
            <input name="specialization" placeholder="Specialization" value={form.specialization} onChange={handleChange} required />
            <input name="phone"          placeholder="Phone Number"   value={form.phone}          onChange={handleChange} required />
            <input name="email"          placeholder="Email Address"  value={form.email}          onChange={handleChange} required type="email" />
            <select name="available" value={form.available} onChange={handleChange}>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
          <button type="submit" className="btn-add">Add Doctor</button>
        </form>
      </div>
      <div className="table-box">
        <h3>📋 Doctor Records ({doctors.length})</h3>
        <table>
          <thead>
            <tr><th>Name</th><th>Specialization</th><th>Phone</th><th>Email</th><th>Availability</th><th>Action</th></tr>
          </thead>
          <tbody>
            {doctors.map(d => (
              <tr key={d._id}>
                <td>{d.name}</td><td>{d.specialization}</td>
                <td>{d.phone}</td><td>{d.email}</td>
                <td><span className="badge" style={{ backgroundColor: d.available ? '#2e7d32' : '#e53935' }}>
                  {d.available ? 'Available' : 'Unavailable'}
                </span></td>
                <td><button className="btn-del" onClick={() => handleDelete(d._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}