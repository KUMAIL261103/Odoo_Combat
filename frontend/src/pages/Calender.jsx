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
    const dateString = newDate.toISOString().split("T")[0];
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
        <ManagerNavbar label1="Home" label2="Maintenance" />
      ) : user.role === "admin" ? (
        <AdminNavbar label1="Home" label2="Booking" />
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
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              Available Sports for {date.toDateString()}:
            </h2>
            {availableSports.length > 0 ? (
              <ul className="list-disc pl-6">
                {availableSports.map((sport, index) => (
                  <li key={index} className="text-lg">
                    {sport}
                  </li>
                ))}
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
