import CreateMaintenance from "../components/CreateMaintenance";
import UserNavbar from "../components/LandingNavbar";
import LandingNavbar from "../components/LandingNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";


export const Maintenance = () => {
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


      <div className="flex  flex-col  justify-center items-center min-h-screen bg-light-green border rounded-xl">
        <CreateMaintenance label="BasketBall Court" />
        <CreateMaintenance label="Tennis Court" />
        <CreateMaintenance label="Badminton Court" />
      </div>
    </>
  );
};
