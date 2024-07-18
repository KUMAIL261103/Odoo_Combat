import { FaCalendarAlt, FaClock, FaUser, FaFootballBall } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';





export const AdminBooking = () => {
    
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        const getAllBookings=async()=>{
            const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
            await fetch(`${backendapi}/api/bookings/getAllBookings`,
                {
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                    }
                }
            ).then((data)=>data.json()).then((data)=>{console.log(data);setBookings(data.bookings)});
        }

        getAllBookings();
        //console.log(bookings);
    },[])
    // const handleApprove = (id) => {
    //     setBookings(bookings.map(booking => booking.id===id ? {...booking, status: "Approved"}: booking))
    // }

    // const handleDeny = (id) => {
    //     setBookings(bookings.map(booking => booking.id===id ? {...booking, status: "Denied"}: booking))
    // }
    return <>
    <AdminNavbar/>
    <div className="min-h-screen bg-slate-950 text-white p-8 ">
        <h1 className="text-4xl font-bold mb-8">Booking Logs</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-700">
                    <tr>
                        <th className="text-center text-sm font-medium text-gray-300 uppercase tracking-wider ">User</th>
                        <th className="text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Sport</th>
                        <th className="text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Date</th>
                        <th className="text-center text-sm font-medium text-gray-300 uppercase tracking-wider">Time</th>
                        {/* <th className="text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {bookings.length>0 && bookings.map((booking,index) => (
                        
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap  ">
                                <div className="flex items-center justify-center gap-4 ">
                                    <FaUser className=" text-light-green text-center " />
                                    <p>{booking.userId.firstName}</p>
                                    {booking.userId.lastName}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="flex items-center justify-center gap-4 ">
                                    <FaFootballBall className="mr-2 text-light-green" />
                                    {booking.facilityId.name}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="flex items-center justify-center gap-4 ">
                                    <FaCalendarAlt className="mr-2 text-light-green" />
                                    {booking.bookingDate}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center justify-center gap-4 ">
                                    <FaClock className="mr-2 text-light-green" />
                                    {booking.createdAt}
                                </div>
                            </td>

                            {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    booking.status === 'Denied' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td> */}
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {booking.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(booking.id)}
                        className="text-green-500 hover:text-green-700 mr-4"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(booking.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Deny
                      </button>
                    </>
                  )}
                </td> */}

                            

                        </tr>
                      
                    ))}
                   
                </tbody>

            </table>
        </div>
    </div>

    </>
}    