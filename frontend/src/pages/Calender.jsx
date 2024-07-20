import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";
import LandingNavbar from "../components/LandingNavbar";
import UserNavbar from "../components/UserNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import ConformationalModal from "../components/ConformationalModal";


const CalendarPage = () => {
  const year = new Date().getFullYear();
  const [alert, setAlert] = useState(false);
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const day = String(new Date().getDate()).padStart(2, '0');
  const currDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState(currDate);
  const [rerender, setRerender] = useState(false);
  const [availableSports, setAvailableSports] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  useEffect(() => {
    const getAllAvailableSportsOnCurrDate = async (currDate) => {
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      await fetch(`${backendUrl}/api/facilities/getFacilityByDate/${currDate}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => res.json())
      .then((data) => setAvailableSports(data.availableFacilitywithoutMaintenance))
      .catch((err) => console.log(err));
    };
    getAllAvailableSportsOnCurrDate(date);
  }, [date, rerender]);
  
  const onDateChange = (newDate) => {
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentDateString = `${currentYear}-${currentMonth}-${currentDay}`
  if (dateString < currentDateString) 
      {
        // console.log("func gives",newDate);
        // console.log("this is a curr date",new Date());
        // console.log("jjii");
        setAlert(true);
        setAvailableSports([]);
        return ;
        
      }
      setAlert(false);
      setDate(dateString);
    };
    
    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
    console.log(date);
    console.log(availableSports);

  return (
    <>
      {user === undefined ? (
        <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "user" ? (
        <UserNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "manager" ? (
        <ManagerNavbar />
      ) : user.role === "admin" ? (
        <AdminNavbar label1="Home" label2="Booking" />
      ) : (
        <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      )}

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Sports Calendar
          </h1>
          <div className="mb-6">
            <Calendar
              onChange={onDateChange}
              value={new Date(date)}
              className="mx-auto"
            />
          </div>
          <div className="mt-2 flex flex-col m-auto justify-center">
          {
            alert==true?<p className="text-red-500 text-xl">Please select a valid date</p>:
          
            <div>
            <h3 className="text-xl font-semibold mb-2">
              Available Sports for <br />
              <span className="text-bg-slate-950 font-bold ">
                {date}
              </span>
              :
            </h3>
            {availableSports?.length > 0 ? (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {availableSports.map((facility, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="bg-light-green text-slate-950 p-3">
                      <h3 className="text-lg font-semibold">{facility.name}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 mb-3">{facility.location}</p>
                      <button
                        className="w-full bg-slate-950 text-white py-2 px-4 rounded hover:bg-slate-800 transition duration-300"
                        onClick={() => setSelectedFacility(facility)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            ) : (
              <p className="text-pretty text-2xl text-slate-950 font-medium">No sports available for this date.</p>
            )}
            </div>
}
          </div>
        </div>
      </div>

      {selectedFacility && (
        <ConformationalModal
          FacilityId={selectedFacility._id}
          heading={selectedFacility.name}
          price={selectedFacility.amount.toString()}
          location={selectedFacility.location}
          date={date}
          closeModal={() => setSelectedFacility(null)}
          rerender={setRerender}
        />
      )}
    </>
  );
};

export default CalendarPage;
