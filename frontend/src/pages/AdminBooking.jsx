import { FaCalendarAlt, FaClock, FaUser, FaFootballBall } from 'react-icons/fa';
import { useState } from 'react';

const initialBookings = [
    {
        id: 1,
        userName: "John Doe",
        sportType: "Football",
        date: "2023-01-01",
        time: "10:00 AM",
        status: "Pending"
    }, {
        id: 2,
        userName: "Harkirat",
        sportType: "Basketball",
        date: "2023-01-01",
        time: "10:00 AM",
        status: "Pending"
    }, {
        id: 3,
        userName: "Khushi",
        sportType: "Cricket",
        date: "2023-01-01",
        time: "10:00 AM",
        status: "Pending"
    

    }
]



export const AdminBooking = () => {
    const [bookings, setBookings] = useState(initialBookings);

    const handleApprove = (id) => {
        setBookings(bookings.map(booking => booking.id===id ? {...booking, status: "Approved"}: booking))
    }

    const handleDeny = (id) => {
        setBookings(bookings.map(booking => booking.id===id ? {...booking, status: "Denied"}: booking))
    }
    return <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Booking Requests</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-700">
                    <tr>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Sport</th>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Time</th>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <FaUser className="mr-2 text-light-green" />
                                    {booking.userName}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <FaFootballBall className="mr-2 text-light-green" />
                                    {booking.sportType}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <FaCalendarAlt className="mr-2 text-light-green" />
                                    {booking.date}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <FaClock className="mr-2 text-light-green" />
                                    {booking.time}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    booking.status === 'Denied' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
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
                </td>

                            

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    </div>
}