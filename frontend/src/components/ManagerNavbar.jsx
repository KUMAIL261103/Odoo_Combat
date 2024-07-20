import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function MangerNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/signin");
    window.location.reload();
  };
   let token = sessionStorage.getItem("token");
   const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <nav className="bg-slate-950 shadow-md -h-[1vh]">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#"   className="-h-[1vh] w-[20vh] font-bold text-white">
            <img src={logo} alt="" />
          </a>
          {/* Navigation Links */}
          <div className="flex space-x-[1.5vw] text-white ">
            <a href="/maintenance" className="text-[1.5vw] text-white hover:text-gray-400">
              Maintenance{" "}
            </a>
           
          </div>
        <div className="text-[1.3vw] flex items-center text-white">
          {user ?  (
              <div className="relative">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="text-white font-medium">Welcome, {user.firstName}</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {dropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-40 bg-slate-800 rounded-md shadow-lg overflow-hidden">
                  <button 
                    className="w-full text-left px-4 py-3 text-white hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => logout()}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
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
