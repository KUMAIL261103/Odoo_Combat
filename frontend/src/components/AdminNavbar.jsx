import logo from "../assets/logo.png";

export default function AdminNavbar() {
  // let token = localStorage.getItem("token");
  // const navigate = useNavigate();
  return (
    <div>
      <nav className="bg-slate-950 shadow-md -h-[1vh]">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="-h-[1vh] w-[20vh] font-bold text-white">
            <img src={logo} alt="" />
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-[1.5vw] text-white">
            <a href="#" className="text-[1.5vw] text-white hover:text-gray-400">
              Booking{" "}
            </a>
            <a href="#" className="text-[1.5vw] text-white hover:text-gray-400">
              Maintenance
            </a>
          </div>
          
          {/* Login/Signin */}
        </div>
      </nav>
    </div>
  );
}
