import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LandingPage from '../assets/LandingPage.png';

export default function Landing() {
  return (
    <div className="h-screen bg-slate-950 p-4 flex overflow-hidden">
      <div className="flex flex-col justify-between w-1/2 pr-4">
        <div className="relative flex items-center justify-center text-center h-[40vh]">
          <h1 className="text-[12vw] font-bold text-light-green opacity-10 absolute inset-0 flex items-center justify-center">
            Sports
          </h1>
          <h1 className="text-white text-[3.5vw] font-bold relative text-left">
            Sport Is
            <br />
            <span>Important For</span>
            <br />
            <span>Good Health</span>
          </h1>
        </div>
        
        <div className="text-white opacity-70 text-[1.2vw] pl-[15%] mb-4">
          Our mission is to create state-of-the-art sports infrastructure that inspires excellence, fosters community engagement, and promotes healthy lifestyles. From local community fields to professional stadiums, we are dedicated to developing safe, sustainable, and innovative spaces that support athletes at every level.
        </div>
        
        <div className="flex space-x-4 pl-[15%] mb-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <div key={index} className="bg-light-green text-black rounded-lg transform skew-x-2 p-2">
              <Icon className="text-[1.5vw]" />
            </div>
          ))}
        </div>
      </div>
      
      <div id="image-landing" className="w-1/2 flex items-center justify-center">
        <img src={LandingPage} alt="Landing Page" className="w-[90%] object-cover h-[90vh]" />
      </div>
    </div>
  );
}