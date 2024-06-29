import { FacilityCard } from "../components/FacilityCard";
import UserNavbar from "../components/UserNavbar";
import swimming from "../assets/swimming.jpg";
import basketball from "../assets/basketball.jpg";
import football from "../assets/football.avif";
import cricket from "../assets/cricket.avif";
import badminton from "../assets/badminton.avif";
import volleyball from "../assets/volleyball.avif";
import archery from "../assets/archery.avif";
import lawntennis from "../assets/lawntennis.avif";

export const Facility = () => {
  return (
    <>
      <UserNavbar
        label1="Home"
        label2="Booking"
        label3="Schedule"
        label4="Contact"
      />

      <div className="flex flex-col  bg-slate-900">
        <div className="flex justify-between bg-slate-900">
          <FacilityCard
            img={volleyball}
            alt="Volleyball"
            heading="Volleyball"
            text="Play Volleyball in our Volleyball court"
            price="Rs. 100 per hour"
            time="7:00 AM - 11:00 PM"
            className="p-2"
          />
          <FacilityCard
            img={swimming}
            alt="Swimming"
            heading="Swimming"
            text="Swim in our Swimming court"
            price="Rs. 200 per hour"
            time="7:00 AM - 8:00 PM"
          />
          <FacilityCard
            img={archery}
            alt="Archery"
            heading="Archery"
            text="Aim in our Archery court"
            price="Rs. 50 per hour"
            time="7:00 AM - 7:00 PM"
          />
          <FacilityCard
            img={football}
            alt="Football"
            heading="Football"
            text="Play Football in our Football court"
            price="Rs. 100 per hour"
            time="7:00 AM - 7:00 PM"
          />
        </div>
        <div className="flex justify-between">
          <FacilityCard
            img={basketball}
            alt="Basketball"
            heading="Basketball"
            text="Play Basketball in our indoor Basketball court"
            price="Rs. 200 per hour"
            time="7:00 AM - 9:00 PM"
          />

          <FacilityCard
            img={lawntennis}
            alt="Tennis"
            heading="Lawn Tennis"
            text="Play Tennis in our Tennis court"
            price="Rs. 200 per hour"
            time="7:00 AM - 7:00 PM"
          />
          <FacilityCard
            img={cricket}
            alt="Cricket"
            heading="Cricket"
            text="Play cricket in our Cricket court"
            price="Rs. 100 per hour"
            time="7:00 AM - 8:00 PM"
          />
          <FacilityCard
            img={badminton}
            alt="Badminton"
            heading="Badminton"
            text="Play Badminton in our indoor Badminton court"
            price="Rs. 200 per hour"
            time="7:00 AM - 9:00 PM"
          />
        </div>
      </div>
    </>
  );
};
