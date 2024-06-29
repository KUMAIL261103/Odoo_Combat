import PropTypes from "prop-types";

export default function UserNavbar({ label1, label2, label3, label4 }) {
  return (
    <div>
      <nav className="bg-black shadow-md py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="px-2 text-2xl font-bold text-white">Logo</div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
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
          <div className="px-2 flex items-center space-x-2 text-white">
            <button className="border-#ccfbcc p-2 rounded-xl hover:bg-white hover:text-black hover:font-bold">
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
