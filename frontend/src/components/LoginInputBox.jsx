import PropTypes from "prop-types";

export function LoginInputBox({ placeholder, icon, value, onChange }) {
  return (
    <div className="mt-5">
      {" "}
      {/* Add mt-4 class for margin-top */}
      <div className="flex justify-start h-10 border rounded-md border-slate-600 pl-4">
        <div className="py-3">{icon}</div>
        <input
          placeholder={placeholder}
          className="pl-3 active:border-0 focus:text-white text-white    bg-slate-950 w-full"
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
