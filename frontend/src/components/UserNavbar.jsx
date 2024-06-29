import PropTypes from "prop-types";

export default function UserNavbar({ label1, label2, label3, label4 }) {
  return (
    <div>
      <nav className="bg-slate-950 shadow-md py-[2vh]">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-[2.8vw] font-bold text-white">
            Logoo
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-[1.6vw]">
            <a href="#" className="text-[1.6vw] text-white hover:text-gray-400">
              {label1}
            </a>
            <a href="#" className="text-[1.6vw] text-white hover:text-gray-400">
              {label2}
            </a>
            <a href="#" className="text-[1.6vw] text-white hover:text-gray-400">
              {label3}
            </a>
            <a href="#" className="text-[1.6vw] text-white hover:text-gray-400">
              {label4}
            </a>
          </div>
          {/* Login/Signin */}
          <div className="text-[1.5vw] flex items-center text-white">
            <button className="border border-light-green px-[2vw] py-[1vh] rounded-xl hover:bg-light-green hover:text-black">
              Sign In
            </button>
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