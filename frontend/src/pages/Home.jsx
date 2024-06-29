import Landing from "../components/Landing";
import UserNavbar from "../components/UserNavbar";
// import {FacilityCard} from "../components/FacilityCard";
import LandingPage from '../assets/LandingPage.png';

export const Home = () => {
  return (
    <div>
      <UserNavbar
        label1="Home"
        label2="Booking"
        label3="Schedule"
        label4="Contact"
      />
      <Landing />
      {/* <FacilityCard img={LandingPage} alt="jkkjQFQF" heading="djknjkewnvkq" text="bdjkqev" price="wbbjqj" /> */}
    </div>
  )

};
