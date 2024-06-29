import Landing from "../components/Landing";
import UserNavbar from "../components/UserNavbar";

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
    </div>
  );
};
