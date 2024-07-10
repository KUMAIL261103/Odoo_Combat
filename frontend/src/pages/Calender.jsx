import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import LandingNavbar from "../components/LandingNavbar";
import UserNavbar from "../components/UserNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [availableSports, setAvailableSports] = useState([]);

  // Dummy data for available sports
  const dummySportsData = {
    "2024-06-30": ["Football", "Basketball", "Tennis"],
    "2024-07-01": ["Swimming", "Volleyball", "Table Tennis"],
    "2024-07-02": ["Cricket", "Badminton"],
    "2024-07-03": ["Rugby", "Hockey", "Athletics"],
    "2024-07-04": ["Golf", "Boxing", "Cycling"],
  };

  const onDateChange = (newDate) => {
    setDate(newDate);
    //console.log(newDate);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(newDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    // const dateString = newDate.toISOString().split("T")[0];
    // console.log(dateString);
    setAvailableSports(dummySportsData[dateString] || []);
  };
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;

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
      ) :<LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />}

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Sports Calendar
          </h1>
          <div className="mb-6">
            <Calendar
              onChange={onDateChange}
              value={date}
              className="mx-auto"
            />
          </div>
          <div className="mt-2 flex flex-col m-auto justify-center">
            <h3 className="text-xl font-semibold mb-2">
              Available Sports for <br />
              <span className="text-bg-slate-950 font-bold ">
                {date.toDateString()}
              </span>
              :
            </h3>
            {availableSports.length > 0 ? (
              <ul className="list-disc pl-6">
                <div className="flex">
                  <div>
                    {availableSports.map((sport, index) => (
                      <li key={index} className="text-lg">
                      
                        {sport}
                        <button className="border my-1 mx-3 border-black px-1  hover:bg-black hover:text-white">
                        Book Now
                      </button>
                      </li>
                    ))}
                  </div>
                   
                </div>
              </ul>
            ) : (
              <p className="text-lg">No sports available for this date.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
