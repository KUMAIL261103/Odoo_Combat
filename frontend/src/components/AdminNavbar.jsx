import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.reload();
  };
   let token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div>
      <nav className="bg-slate-950 shadow-md -h-[1vh]">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#"   className="-h-[1vh] w-[20vh] font-bold text-white">
            <img src={logo} alt="" />
          </a>
          {/* Navigation Links */}
          <div className="flex space-x-[1.5vw] text-white">
            <a href="/admin-booking" className="text-[1.5vw] text-white hover:text-gray-400">
              Booking{" "}
            </a>
            <a href="/maintenance" className="text-[1.5vw] text-white hover:text-gray-400">
              Maintenance
            </a>
          </div>
          <div className="text-[1.3vw] flex items-center text-white">
          {user ? (
              <div className="flex flex-col place-items-center  gap-2 mt-4">

                <span className="flex items-center  justify-center  text-white font-light opacity-90 capitalize">welcome, {user.firstName}</span>
                <button className=" px-3  rounded-md bg-slate-600 text-gray-white text-lg" onClick={()=>logout()}>Logout</button>
              </div>
            ) : (
            <button
              onClick={() => navigate("/signup")}

              className={`border border-light-green px-[2vw] py-[1vh] rounded-xl hover:bg-light-green hover:text-black ${token!=undefined?"hidden":"visible"}`} >
              Sign Up
            </button>
             )}
          </div>
          
          {/* Login/Signin */}
        </div>
      </nav>
    </div>
  );
}
