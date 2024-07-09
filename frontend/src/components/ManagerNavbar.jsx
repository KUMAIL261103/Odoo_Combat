import logo from "../assets/logo.png";

export default function MangerNavbar() {
  // const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  // let token = localStorage.getItem("token");
  // const navigate = useNavigate();
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
            <a href="/maintenance" className="text-[1.5vw] text-white hover:text-gray-400">
              Maintenance{" "}
            </a>
           
          </div>
          
          {/* Login/Signin */}
        </div>
      </nav>
    </div>
  );
}
