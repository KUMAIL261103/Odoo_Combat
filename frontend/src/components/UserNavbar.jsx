import PropTypes from "prop-types";

export default function UserNavbar({ label1, label2, label3, label4 }) {
  return (
    <div>
      <nav className="bg-slate-950  shadow-md py-4">
        <div className="container  mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="px-4 py-auto  text-2xl  font-bold text-white">Logoo</div>
          {/* Navigation Links */}
          <div className="flex space-x-4 text-xl	 gap-x-5">
            <a href="#" className="text-white  hover:text-gray-400">
              {label1}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              {label2}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              {label3}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              {label4}
            </a>
          </div>
          {/* Login/Sigin */}
          <div className="px-2 py-auto text-xl flex items-center space-x-2 text-white">
            <button className="border border-light-green p-2 rounded-xl hover:bg-light-green hover:text-black">
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
