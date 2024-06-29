import React from 'react';
import UserNavbar from '../components/UserNavbar';

const MaintenanceLog = () => {
  const maintenanceLogs = [
    { id: 1, date: '2023-01-01', description: 'Replaced air filters' },
    { id: 2, date: '2023-02-01', description: 'Checked HVAC system' },
  ];

  return (
    <>
    <UserNavbar
     label1="Home"
     label2="Booking"
     label3="Schedule"
     label4="Contact"/>
    <div className="flex flex-col items-center min-h-screen bg-white p-4">
      <div className="w-3/4 max-w-md bg-black text-white p-4 rounded-lg">
        <h2 className="text-xl mb-4">Maintenance Log</h2>
        <ul>
          {maintenanceLogs.map(log => (
            <li key={log.id} className="mb-2">
              <div className="font-bold">{log.date}</div>
              <div>{log.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    </>
  );
};

export default MaintenanceLog;
