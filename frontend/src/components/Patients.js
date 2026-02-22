import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/patients';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name:'', age:'', gender:'Male', disease:'', doctor:'', phone:'', status:'Admitted'
  });
  const [error, setError] = useState('');

  const fetchPatients = () => axios.get(API).then(r => setPatients(r.data));
  useEffect(() => { fetchPatients(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault(); setError('');
    try {
      await axios.post(API, form);
      setForm({ name:'', age:'', gender:'Male', disease:'', doctor:'', phone:'', status:'Admitted' });
      fetchPatients();
    } catch (err) { setError(err.response?.data?.error || 'Error'); }
  };

  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`);
    fetchPatients();
  };

  const statusColor = s => ({ Admitted:'#e53935', Discharged:'#2e7d32', OutPatient:'#f57f17' }[s] || '#888');

  return (
    <div>
      <div className="page-title">🏥 Patient Management</div>
      <div className="form-box">
        <h3>➕ Add New Patient</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input name="name"    placeholder="Patient Name"        value={form.name}    onChange={handleChange} required />
            <input name="age"     placeholder="Age"                 value={form.age}     onChange={handleChange} required type="number" />
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
            <input name="disease" placeholder="Disease / Diagnosis" value={form.disease} onChange={handleChange} required />
            <input name="doctor"  placeholder="Assigned Doctor"     value={form.doctor}  onChange={handleChange} required />
            <input name="phone"   placeholder="Phone Number"        value={form.phone}   onChange={handleChange} required />
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Admitted</option><option>Discharged</option><option>OutPatient</option>
            </select>
          </div>
          <button type="submit" className="btn-add">Add Patient</button>
        </form>
      </div>
      <div className="table-box">
        <h3>📋 Patient Records ({patients.length})</h3>
        <table>
          <thead>
            <tr><th>Name</th><th>Age</th><th>Gender</th><th>Disease</th><th>Doctor</th><th>Phone</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td>
                <td>{p.disease}</td><td>{p.doctor}</td><td>{p.phone}</td>
                <td><span className="badge" style={{ backgroundColor: statusColor(p.status) }}>{p.status}</span></td>
                <td><button className="btn-del" onClick={() => handleDelete(p._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}