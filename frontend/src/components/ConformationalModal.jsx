 import PropTypes from "prop-types";

const ConformationalModal = ({FacilityId,heading,price,location,date,closeModal,rerender}) => {
    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
    console.log("this iss user datra",user);
    const token = sessionStorage.getItem("token") || undefined;
    // console.log("this is token",token);
    const bookFacility= async(FacilityId,userId,date)=>{
        const backendUrl = import.meta.env.VITE_APP_URL || "http://localhost:3000";
        const confirmbooking = await fetch(`${backendUrl}/api/bookings/createBooking`,{
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
        } ).then((res) => res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));
        console.log(confirmbooking);
        
        closeModal();
        rerender((prev)=>!prev);

        }
  
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
       <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
         <p className="text-2xl font-semibold text-richblack-5">
           {heading}  
         </p>
         <p className="mt-3 mb-5 leading-6 text-richblack-200">
           {price}
         </p>
         <p className="mt-3 mb-5 leading-6 text-richblack-200">
             {location}
         </p>
         <p className="mt-3 mb-5 leading-6 text-richblack-200">
             {date}
         </p>
         <div className="flex items-center justify-center gap-2">
           <button onClick={()=>bookFacility(FacilityId,user?._id,date)}
          className={`text-center px-4 py-3 text-[13px]
                    rounded-md font-bold bg-yellow-50 text-black hover:bg-richblack-900 hover:text-richblack-5  
                    hover:scale-95 transition-all duration-200`}> Confirm Booking</button>
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
     </div>
   
  )
}
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