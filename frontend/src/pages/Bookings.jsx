import { FaCalendarAlt, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import LandingNavbar from "../components/LandingNavbar";
import UserNavbar from "../components/UserNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import { useState, useEffect } from "react";

// Bookings component
export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // use a single useState to store user and token
  const [auth, setAuth] = useState({
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    token: sessionStorage.getItem("token"),
  });
  console.log(setAuth); //consoled just to avoid unused error
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { user, token } = auth;
        if (!user || !token) return; // Guard clause to handle undefined user or token
        console.log("Fetching bookings for user:", user._id); // Debugging log
        const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
        console.log(backendapi);
        const response = await fetch(
          `${backendapi}/api/bookings/getBookingByUserId?userId=${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        //console.log(data);
        const bookingarray = data.bookings;
        bookingarray.reverse();
        setBookings(bookingarray);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings(); // Ensure this runs only once when the component mounts
  }, [auth]); // dependency array to trigger useEffect on auth change

  return (
    <>
      <div>
        {!auth.user ? (
          <LandingNavbar
            label1="Home"
            label2="Booking"
            label3="Calendar"
            label4="Facility"
          />
        ) : auth.user.role === "user" ? (
          <UserNavbar
            label1="Home"
            label2="Booking"
            label3="Calendar"
            label4="Facility"
          />
        ) : auth.user.role === "manager" ? (
          <ManagerNavbar />
        ) : auth.user.role === "admin" ? (
          <AdminNavbar  />
        ) : (
          <LandingNavbar
            label1="Home"
            label2="Booking"
            label3="Calendar"
            label4="Facility"
          />
        )}
      </div>

      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Your Bookings</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-slate-800 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    {booking.facilityId.name}
                  </h2>
                  <p className="flex items-center mb-2 text-white">
                    <FaMapMarkedAlt className="mr-2 text-light-green" />
                    {booking.facilityId.location}
                  </p>
                  <p className="flex items-center mb-2 text-white">
                    <FaCalendarAlt className="mr-2 text-light-green" />
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                  <p className="flex items-center mb-2 text-white">
                    <FaClock className="mr-2 text-light-green" />
                    {new Date(booking.createdAt).toLocaleTimeString()}
                  </p>
                  {/* <ApprovalBadge approval={booking.bookingStatus} /> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Bookings;
