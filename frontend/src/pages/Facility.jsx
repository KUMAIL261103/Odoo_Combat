import { FacilityCard } from "../components/FacilityCard"
import UserNavbar from "../components/UserNavbar"
import swimming from "../assets/swimming.jpg"

export const Facility = () => {
    return (
        <>
            <UserNavbar 
                label1="Home"
                label2="Booking"
                label3="Schedule"
                label4="Contact"/>

            <div className="flex flex-col">

            <div className="flex justify-between">

            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            </div>
            <div className="flex justify-between">
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            
            />


            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            <FacilityCard 
                img={swimming}
                alt="Basketball"
                heading="Basketball"
                text="Play basketball in our indoor basketball court"
                price="Rs. 500 per hour"
                time="11:00 AM - 12:00 PM"
            />
            </div>
        
            </div>
        </>
    )
}