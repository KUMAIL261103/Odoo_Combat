import { FaCalendarAlt, FaMapMarkedAlt,FaClock } from "react-icons/fa"
import LandingNavbar from "../components/LandingNavbar";
import UserNavbar from "../components/UserNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import PropTypes from "prop-types";
const dummyBookings = [
    {
        id: 1,
        date: "2023-01-01",
        sportType: "Football",
        time: "10:00 AM",
        venue: "ahmedabad",
        approval: "Completed"
    },{
        id: 1,
        date: "2023-01-01",
        sportType: "Cricket",
        time: "10:00 AM",
        venue: "ahmedabad",
        approval: "Completed"
    },{
        id: 1,
        date: "2023-01-01",
        sportType: "Basketball",
        time: "10:00 AM",
        venue: "ahmedabad",
        approval: "Completed"
    }
]

const ApprovalBadge = ({approval}) => {
  // Add prop validation for 'approval'
  ApprovalBadge.propTypes = {
    approval: PropTypes.string.isRequired
  };
    const approvalColor = (approval) => {
        switch (approval) {
            case 'Completed':
              return 'bg-green-100 text-green-800';
            case 'Upcoming':
              return 'bg-blue-100 text-blue-800';
            case 'Cancelled':
              return 'bg-red-100 text-red-800';
            default:
              return 'bg-gray-100 text-gray-800';
    }
}

return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${approvalColor(approval)}`}>
      {approval}
    </span>
)
}

export const Bookings = () => {

    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
    return (
        
      <>
<div>

        {user === undefined ? (
            <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
        ) : user.role === "user" ? (
            <UserNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
        ) : user.role === "manager" ? (
            <ManagerNavbar label1="Home" label2="Maintenance" />
        ) : user.role === "admin" ? (
            <AdminNavbar label1="Home" label2="Booking" />
        ) :<LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />}
        </div>
      
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Your Bookings</h1>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dummyBookings.map((booking) => (
                <div key={booking.id} className="bg-slate-800 shadow-lg overflow-hidden">
                    <div className="p-6"> 
                        <h2 className="text-2xl font-semibold mb-2 text-white">{booking.sportType}</h2>
                        <p className="flex items-center mb-2 text-white">
                            <FaMapMarkedAlt className="mr-2 text-light-green"/>
                            {booking.venue}
                        </p>
                        <p className="flex items-center mb-2 text-white">
                            <FaCalendarAlt className="mr-2 text-light-green"/>
                            {booking.date}
                        </p>
                        <p className="flex items-center mb-2 text-white">
                            <FaClock className="mr-2 text-light-green"/>
                            {booking.time}
                        </p>
                        <ApprovalBadge approval={booking.approval}/>

                    </div>

                
                </div>
            
            ))}
            
            </div> 
        </div>
            </>
    )
}

