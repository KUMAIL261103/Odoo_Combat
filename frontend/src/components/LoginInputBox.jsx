import PropTypes from "prop-types";

export function LoginInputBox({ placeholder, icon, value, onChange }) {
  return (
    <div className="mt-5">
      {" "}
      {/* Add mt-4 class for margin-top */}
      <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 hover:border-gray-400 focus-within:border-gray-400 w-full">
        <div className="mr-3 text-white">{icon}</div>
        <input
          placeholder={placeholder}
          className="bg-transparent outline-none text-white w-full"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
}

LoginInputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
