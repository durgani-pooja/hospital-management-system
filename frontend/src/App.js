import React, { useState } from 'react';
import './App.css';
import Dashboard    from './components/Dashboard';
import Patients     from './components/Patients';
import Doctors      from './components/Doctors';
import Appointments from './components/Appointments';

const tabs = [
  { id: 'dashboard',    label: '📊 Dashboard'    },
  { id: 'patients',     label: '🏥 Patients'     },
  { id: 'doctors',      label: '👨‍⚕️ Doctors'      },
  { id: 'appointments', label: '📅 Appointments' },
];

function App() {
  const [active, setActive] = useState('dashboard');
  return (
    <div className="app">
      <div className="sidebar">
        <h2>🏥 Hospital<br/>Management</h2>
        {tabs.map(t => (
          <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="main">
        {active === 'dashboard'    && <Dashboard />}
        {active === 'patients'     && <Patients />}
        {active === 'doctors'      && <Doctors />}
        {active === 'appointments' && <Appointments />}
      </div>
    </div>
  );
}

export default App;