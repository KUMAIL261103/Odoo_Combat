export function LoginButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-gray-900 bg-orange-400 border-2 border-white hover:bg-orange-900 focus:outline-none focus:ring-gray-300 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      {label}
    </button>
  );
}
