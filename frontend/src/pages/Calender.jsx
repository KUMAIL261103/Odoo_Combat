import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import UserNavbar from "../components/UserNavbar";
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

  return (
    <>
      <UserNavbar
        label1="Home"
        label2="Booking"
        label3="Schedule"
        label4="Contact"
      />
      <div className="bg-slate-950  mt-0 h-[85vh]  ">
        <div className="w-full mt-0 bg-slate-950  m-auto max-w-4xl  bg-white rounded-lg  flex flex-col mt-[2%] p-2">
          <h1 className="text-3xl font-bold text-center mb-3">
            SPORTS CALENDAR
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
