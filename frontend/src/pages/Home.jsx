import Landing from "../components/Landing";
import LandingNavbar from "../components/LandingNavbar";
import UserNavbar from "../components/UserNavbar";
import ManagerNavbar from "../components/ManagerNavbar";
import AdminNavbar from "../components/AdminNavbar";

export const Home = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  console.log("User:", user);

  return (
    <div>
      {user === undefined ? (
        <LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "user" ? (
        <UserNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />
      ) : user.role === "manager" ? (
        <ManagerNavbar />
      ) : user.role === "admin" ? (
        <AdminNavbar />
      ) :<LandingNavbar label1="Home" label2="Booking" label3="Calendar" label4="Facility" />}
      
      <Landing />
    </div>
  );
};
