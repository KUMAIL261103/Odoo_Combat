// import CreateMaintenance from "../components/CreateMaintenance";
import UserNavbar from "../components/LandingNavbar";
import LandingNavbar from "../components/LandingNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";
import { useEffect } from "react";
import CreateMaintenanceModal from "../components/CreateMaintenanceModal";
export const Maintenance = () => {
        const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
        if(user === undefined){
            window.location.href = "/signin";}
        const [facility, setFacility] = useState([]);
        const [modal, setModal] = useState(false);
        const [selectedFacility, setSelectedFacility] = useState({});
        useEffect(()=>{
          
            const fetchdata = async()=>{
            const backendapi =  import.meta.env.VITE_API_URL || "http://localhost:3000";
            await fetch(`${backendapi}/api/facilities/getFacilityWithMaintainencelogs`,
            {
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            }
          })
          .then((data)=>data.json())
          .then((data)=>{console.log(data.facility);setFacility(data.facility )})
          }
          fetchdata();
        },[selectedFacility])
      const [togglelogs, setTogglelogs] = useState([]);
      //console.log(togglelogs);
      //console.log(selectedFacility._id);

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

      <div className="flex  flex-col  justify-center items-center min-h-screen bg-light-green border rounded-xl">
        {facility.map((facility, index) => (
          
   
          <div key={index} className="bg-gray-500 my-2 w-3/4" >
            <div className="bg-red-200 flex justify-around items-center w-full">
              <img src={`${facility.image}`} alt="img" className="rounded-full object-cover w-[50px] h-[50px]"></img>
              <h1 className="text-2xl font-bold text-center ">{facility.name}</h1>
              <div>
              <button className="bg-light-green text-black py-2 px-4 rounded mx-2"
              onClick={()=>{ setSelectedFacility(facility);setModal(true);}}>
              Create</button>
              <button className= {`bg-light-green text-black py-2 px-4 rounded mx-2 `}
               onClick=
               {()=>{setTogglelogs((prev)=>{
                if(prev.includes(index)==true){
                  return prev.filter((item)=>item!=index)
                }else{
                  return [...prev,index]
                }
               })}}> {togglelogs.includes(index)==true?"Show less":"Show logs"}</button>
              </div>
            </div>
            <div className= {`flex flex-col items-center ${togglelogs.includes(index)==true?"visible":"hidden"}`} >
            {
              facility.MaintenanceId.length==0?<div className="text-white">No logs available</div>:null
            }
              {facility.MaintenanceId?.map((maintenance, index) => (
                <div className="bg-black text-white p-4 w-full max-w-md rounded-lg mt-4" key={index}>
                  <div className="text-white">Title : {maintenance.title}</div>
                  <div className="text-white">Scheduled Date : {maintenance.MaintenanceDate}</div>
                  <div className="text-white">Brief : {maintenance.note}</div>
                </div>
              ))}
              </div>
            
            </div>
         
        ))}
        {modal && < CreateMaintenanceModal 
        facility={selectedFacility.name} 
        closeModal= {()=>setModal(false)} 
        FacilityId={selectedFacility._id}
          />}


      </div>
    </>
  );
};
