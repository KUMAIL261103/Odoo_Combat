import CreateMaintenance from "../components/CreateMaintenance"
import UserNavbar from "../components/UserNavbar"

export const Maintenance = () => {
    return <>
        <UserNavbar  label1="Home"
        label2="Booking"
        label3="Schedule"
        label4="Contact"/>

        <div className="flex flex-col justify-center items-center min-h-screen bg-light-green border rounded-xl">
        <CreateMaintenance label="BasketBall Court"/>
        <CreateMaintenance label="Tennis Court"/>
        <CreateMaintenance label="Badminton Court"/>

        </div>
      
    </>
}