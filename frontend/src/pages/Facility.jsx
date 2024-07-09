import { useEffect, useState } from "react";
import axios from "axios";
import FacilityCard  from "../components/FacilityCard";
import UserNavbar from "../components/UserNavbar";
import LandingNavbar from "../components/LandingNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";

const isUsedDateCheck = (isUsedDate) => {
  if(isUsedDate.length === 0)return false;
  let start = 0;
  let end = isUsedDate.length - 1;
  const year = new Date.getFullYear();
  const month = String(new Date.getMonth() + 1).padStart(2, '0');
  const day = String(new Date.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;
  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let isUsedDate = isUsedDate[mid];
    if(currentDate === isUsedDate){
      return true;
    }
    if(currentDate < isUsedDate){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }
  return false;

}
const isAvailable = (facilities) => {
  const availableFacilities = [];
  for(let i=0;i<facilities.length;i++){  
    if(isUsedDateCheck(facilities[i].isUsedDate)==false){
      availableFacilities.push(facilities[i]);
    }  
  }
  return availableFacilities;
}
export const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const backendUrl = import.meta.url.VITE_API_URL || "http://localhost:3000";
        const response = await axios.get(
          `${backendUrl}/api/facilities/getAllFacilities`
         );
        const availableFacilities = isAvailable(response.data.facilities);
        console.log(response.data.facilities);
        setFacilities(availableFacilities);
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
