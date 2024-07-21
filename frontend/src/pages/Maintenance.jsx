import { useState, useEffect } from "react";
import UserNavbar from "../components/LandingNavbar";
import LandingNavbar from "../components/LandingNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import CreateMaintenanceModal from "../components/CreateMaintenanceModal";

export const Maintenance = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  if (user === undefined) {
    window.location.href = "/signin";
  }
  const [facilities, setFacilities] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({});
  const [reload, setReload] = useState(false);
  const [expandedFacilities, setExpandedFacilities] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
      try {
        const response = await fetch(
          `${backendapi}/api/facilities/getFacilityWithMaintainencelogs`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setFacilities(data.facility);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      }
    };
    fetchdata();
  }, [modal, reload]);

  const ChangeStatus = async (id, status) => {
    const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
    try {
      await fetch(`${backendapi}/api/Maintenances/updateMaintenance/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ Status: status === "Done" ? "Pending" : "Done" }),
      });
      setReload(!reload);
    } catch (error) {
      console.error("Error changing status:", error);
    }
  };

  const toggleFacilityLogs = (facilityId) => {
    setExpandedFacilities(prev => ({
      ...prev,
      [facilityId]: !prev[facilityId]
    }));
  };

  return (
    <>
      {user === undefined ? (
        <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "user" ? (
        <UserNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "manager" ? (
        <ManagerNavbar />
      ) : user.role === "admin" ? (
        <AdminNavbar />
      ) : (
        <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      )}

      <div className="flex flex-col items-center min-h-screen bg-slate-950 p-4">
        {facilities.map((facility) => (
          <div key={facility._id} className="w-full max-w-3xl bg-slate-800 rounded-lg mb-4 overflow-hidden">
            <div className="bg-light-green p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="rounded-full object-cover w-12 h-12"
                />
                <h2 className="text-xl font-bold text-black">{facility.name}</h2>
              </div>
              <div>
                {user.role === "manager" && (
                  <button
                    className="bg-slate-700 text-white py-2 px-4 rounded mr-2 hover:bg-slate-600"
                    onClick={() => {
                      setSelectedFacility(facility);
                      setModal(true);
                    }}
                  >
                    Create
                  </button>
                )}
                <button
                  className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
                  onClick={() => toggleFacilityLogs(facility._id)}
                >
                  {expandedFacilities[facility._id] ? "Show less" : "Show logs"}
                </button>
              </div>
            </div>
            {expandedFacilities[facility._id] && (
              <div className="p-4">
                {facility.MaintenanceId.length === 0 ? (
                  <p className="text-white italic">No logs available</p>
                ) : (
                  <ul className="space-y-4">
                    {facility.MaintenanceId.map((maintenance) => (
                      <li key={maintenance._id} className="bg-slate-700 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-white">{maintenance.title}</h3>
                        <p className="text-sm text-gray-300 mb-1">
                          Scheduled: {new Date(maintenance.MaintenanceDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm mb-3 text-gray-300">{maintenance.note}</p>
                        <button
                          className={`
                            ${maintenance.MaintenanceStatus === "Done" ? "bg-green-500" : "bg-red-500"}
                            ${user.role === "admin" ? "cursor-not-allowed opacity-50" : "hover:opacity-80"}
                            text-white py-1 px-3 rounded transition duration-300
                          `}
                          onClick={() => user.role !== "admin" && ChangeStatus(maintenance._id, maintenance.MaintenanceStatus)}
                          disabled={user.role === "admin"}
                        >
                          {maintenance.MaintenanceStatus}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {modal && (
        <CreateMaintenanceModal
          facility={selectedFacility.name}
          closeModal={() => setModal(false)}
          FacilityId={selectedFacility._id}
        />
      )}
    </>
  );
};

export default Maintenance;