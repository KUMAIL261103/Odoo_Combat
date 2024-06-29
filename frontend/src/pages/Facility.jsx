import { useEffect, useState } from "react";
import axios from "axios";
import { FacilityCard } from "../components/FacilityCard";
import UserNavbar from "../components/UserNavbar";

export const Facility = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/facilities/getAllFacilities"
        );
        setFacilities(response.data.facilities);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      }
    };

    fetchFacilities();
  }, []);

  return (
    <>
      <UserNavbar
        label1="Home"
        label2="Booking"
        label3="Schedule"
        label4="Contact"
      />

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
