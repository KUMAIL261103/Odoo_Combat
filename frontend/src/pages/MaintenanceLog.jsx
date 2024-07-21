import AdminNavbar from "../components/AdminNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import { useState } from "react";

const MaintenanceLog = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const [expandedLog, setExpandedLog] = useState(null);

  const maintenanceLogs = [
    { id: 1, date: "2023-01-01", description: "Replaced air filters", details: "All HVAC filters in building A were replaced with new MERV-13 filters." },
    { id: 2, date: "2023-02-01", description: "Checked HVAC system", details: "Annual inspection of HVAC system completed. No major issues found." },
    { id: 3, date: "2023-03-01", description: "Trimmed Garden Grass", details: "Landscaping team trimmed all grass areas and pruned shrubs." },
    { id: 4, date: "2023-04-01", description: "Booked order for new Tennis Rackets", details: "Ordered 20 new Wilson Pro Staff tennis rackets for the club." },
  ];

  const toggleLogDetails = (logId) => {
    setExpandedLog(expandedLog === logId ? null : logId);
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {user.role === "manager" ? <ManagerNavbar /> : user.role === "admin" && <AdminNavbar />}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-slate-900 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Maintenance Log</h2>
          <ul className="space-y-4">
            {maintenanceLogs.map((log) => (
              <li key={log.id} className="border-b border-gray-700 pb-4">
                <div 
                  className="flex justify-between items-center cursor-pointer hover:bg-slate-800 p-2 rounded transition duration-300"
                  onClick={() => toggleLogDetails(log.id)}
                >
                  <div className="font-medium">{log.description}</div>
                  <div className="text-sm text-gray-400">{log.date}</div>
                </div>
                {expandedLog === log.id && (
                  <div className="mt-2 text-sm text-gray-300 pl-2">
                    {log.details}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceLog;