import { useEffect, useState } from "react";
import axios from "axios";
import FacilityCard  from "../components/FacilityCard";
import UserNavbar from "../components/UserNavbar";
import LandingNavbar from "../components/LandingNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";

export const Facility = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          "https://odoo-combat-cgs8.onrender.com/api/facilities/getAllFacilities"
        );
        setFacilities(response.data.facilities);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      }
    };

    fetchFacilities();
  }, []);
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  console.log(user);

  return (
    <>
      {!user ? (
        <LandingNavbar
          label1="Home"
          label2="Booking"
          label3="Calendar"
          label4="Facility"
        />
      ) : user.role === "user" ? (
        <UserNavbar
          label1="Home"
          label2="Booking"
          label3="Calendar"
          label4="Facility"
        />
      ) : user.role === "manager" ? (
        <ManagerNavbar label1="Home" label2="Maintenance" />
      ) : user.role === "admin" ? (
        <AdminNavbar label1="Home" label2="Booking" />
      ) : (
        <LandingNavbar
          label1="Home"
          label2="Booking"
          label3="Calendar"
          label4="Facility"
        />
       
      )
      }

      <div className="flex flex-wrap gap-4">
        {facilities.length > 0 ? (
          facilities.map((facility, index) => (
            <div className="flex justify-between " key={index}>
              <FacilityCard
                img={facility.image}
                alt={facility.name}
                heading={facility.name}
                location={facility.location}
                price={`${facility.amount} ₹`}
                className="p-2"
              />
            </div>
          ))
        ) : (
          <div className="text-white">Loading facilities...</div>
        )}
      </div>
    </>
  );
};
