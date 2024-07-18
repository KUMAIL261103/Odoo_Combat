import PropTypes from "prop-types";

const ConformationalModal = ({
  FacilityId,
  heading,
  price,
  location,
  date,
  closeModal,
  rerender,
}) => {
    console.log(FacilityId,heading,price,location,date);
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
//   console.log("this iss user datra", user);
  const token = sessionStorage.getItem("token") || undefined;
  // console.log("this is token",token);
  const bookFacility = async (FacilityId, userId, date) => {
    
    const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const confirmbooking = await fetch(
      `${backendUrl}/api/bookings/createBooking`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          facilityId: FacilityId,
          date,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(confirmbooking);

    closeModal();
    rerender((prev) => !prev);
  };


  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="w-11/12 max-w-[400px] rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8 space-y-6 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">{heading}</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <p>Price:</p>
          <p className="font-semibold">{price}</p>
          <p>Location:</p>
          <p className="font-semibold">{location}</p>
          <p>Date:</p>
          <p className="font-semibold">{date}</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => bookFacility(FacilityId, user?._id, date)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 -ml-7 rounded-lg transition duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Confirm Booking
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center"
            onClick={closeModal}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
ConformationalModal.propTypes = {
  heading: PropTypes.string.isRequired,
  FacilityId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  rerender: PropTypes.func.isRequired,
};

export default ConformationalModal;
