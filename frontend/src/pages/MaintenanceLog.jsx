import AdminNavbar from "../components/AdminNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
// import UserNavbar from "../components/LandingNavbar";

const MaintenanceLog = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const maintenanceLogs = [
    { id: 1, date: "2023-01-01", description: "Replaced air filters" },
    { id: 2, date: "2023-02-01", description: "Checked HVAC system" },
    { id: 3, date: "2023-03-01", description: "Trimmed Garden Grass " },
    {
      id: 4,
      date: "2023-04-01",
      description: "Booked order for new Tennis Rackets",
    },
  ];

  return (
    <>
    {user.role === "manager" ? (
      <ManagerNavbar />
    ) : (
    user.role === "admin" && <AdminNavbar />
    )}


      <div className="flex flex-col  min-h-screen  bg-slate-950 p-2 pl-10">
        <div className="w-3/4 max-w-md bg-slate-900 text-white p-3 rounded-lg">
          <h2 className="text-2xl  mb-7">Maintenance Log</h2>
          <ul>
            {maintenanceLogs.map((log) => (
              <li key={log.id} className="mb-2">
                <div className="flex justify-between ">
                  <div>{log.description}</div>
                  <div className="font-bold">{log.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MaintenanceLog;
