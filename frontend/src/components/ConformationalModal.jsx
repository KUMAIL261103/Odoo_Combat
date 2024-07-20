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
  const bookFacility = async (FacilityId, userId, date,event) => {
    event.preventDefault();
    
    let createbookingdata ;
    const backendUrl =  import.meta.env.VITE_API_URL || "http://localhost:3000";
     await fetch(
      `${backendUrl}/api/bookings/createBooking`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          facilityId: FacilityId,
        }),
      }
    ).then((data) => data.json())
    .then((data)=>{console.log(data);createbookingdata=data})
    .catch((err) => console.log(err));
    console.log("this is createbookingdata",createbookingdata);
    let order = createbookingdata.order;
    console.log("this is order",order);
     var options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount:price*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency:"INR",
      name: "Sportspace", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        console.log(response);
        const body = {
          razorpay_order_id:response.razorpay_order_id,
          razorpay_payment_id:response.razorpay_payment_id,
          razorpay_signature:response.razorpay_signature,
          userId,
          facilityId: FacilityId,
          date
        };
         const validateRes = await fetch(
          `${backendUrl}/api/bookings/validateBooking`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: user.firstName, //your customer's name
        email: user.email,
        contact: "9000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    
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
            onClick={(event) => bookFacility(FacilityId, user?._id, date,event)}
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
