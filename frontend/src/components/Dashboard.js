import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard')
      .then(res => setStats(res.data));
  }, []);

  if (!stats) return <p style={{padding:'30px'}}>Loading...</p>;

  const cards = [
    { label: 'Total Patients',    value: stats.totalPatients,     bg: '#1565c0' },
    { label: 'Total Doctors',     value: stats.totalDoctors,      bg: '#6a1b9a' },
    { label: 'Appointments',      value: stats.totalAppointments, bg: '#00838f' },
    { label: 'Admitted',          value: stats.admitted,          bg: '#e53935' },
    { label: 'Discharged',        value: stats.discharged,        bg: '#2e7d32' },
    { label: 'OutPatients',       value: stats.outpatient,        bg: '#f57f17' },
    { label: 'Scheduled Appts',   value: stats.scheduled,         bg: '#4527a0' },
    { label: 'Available Doctors', value: stats.availableDoctors,  bg: '#00695c' },
  ];

  return (
    <div>
      <div className="page-title">📊 Hospital Dashboard</div>
      <div className="cards">
        {cards.map((c, i) => (
          <div className="card" key={i} style={{ backgroundColor: c.bg }}>
            <div className="num">{c.value}</div>
            <div className="lbl">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}