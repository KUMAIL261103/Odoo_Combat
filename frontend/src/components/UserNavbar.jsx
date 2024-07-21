import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function UserNavbar({ label1, label2, label3, label4 }) {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  console.log(user);
  console.log(token);
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/signin");
    window.location.reload();
  };
  //console.log("hello",user);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="bg-slate-950 shadow-md">
        <div className="w-[90vw] mx-auto flex justify-between items-center max-md:flex-col">
          {/* Logo */}
          <div className="h-[90px] w-[22vh] font-bold text-white flex  items-center justify-center">
            <img src={logo} alt="" className="w-auto h-32"/>
            
          </div>
          {/* Navigation Links */}
          <div className="flex gap-4 max-md:gap-1  max-md:flex-col ">
            <a href={"/home"} className="text-xl text-white hover:text-gray-400 max-sm:text-base">
              {label1}
            </a>
            <a href={"/booking"} className="text-xl text-white hover:text-gray-400 max-sm:text-base">
              {label2}
            </a>
            <a href={"/calender"} className="text-xl text-white hover:text-gray-400 max-sm:text-base">
              {label3}
            </a>
            <a href={"/facility"} className="text-xl text-white hover:text-gray-400 max-sm:text-base">
              {label4}
            </a>
          </div>
          {/* Login/Signin */}
          <div className="text-[1.3vw] flex items-center text-white">
          {user ? (
                <div className="relative">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="text-white text-xl max-sm:text-base">Welcome, {user.firstName}</span>
                  <svg className="w-4 h-4 text-white text-2xl max-sm:text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 z-10 bg-slate-800 rounded-md shadow-lg overflow-hidden">
                    <button 
                      className="w-full text-left px-4 py-3  text-white hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2"
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
        </div>
      </nav>
    </div>
  );
}

// Define propTypes for the component and Adding validation for labels
UserNavbar.propTypes = {
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  label3: PropTypes.string.isRequired,
  label4: PropTypes.string.isRequired,
};
