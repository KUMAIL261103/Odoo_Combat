import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LandingPage from '../assets/LandingPage.png';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side Content */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 px-4 lg:px-12">
        {/* Main Heading and Subheading */}
        <div className="relative flex flex-col justify-center lg:justify-start lg:mt-16 text-left">
          <h1 className="text-[25vw] lg:text-[12vw] font-bold text-light-green opacity-15 absolute">
            Sports
          </h1>
          <h1 className="text-white text-[10vw] lg:text-[4vw] font-bold relative z-10 mt-[5vh] lg:mt-0">
            Sport Is
            <br />
            Important For
            <br />
            Good Health
          </h1>
        </div>
        <div className="text-white opacity-70 text-[4.5vw] lg:text-[1.2vw]  mt-4 lg:mt-8 lg:mb-8">
          Our mission is to create state-of-the-art sports infrastructure that inspires excellence, fosters community engagement, and promotes healthy lifestyles. From local community fields to professional stadiums, we are dedicated to developing safe, sustainable, and innovative spaces that support athletes at every level.
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-start lg:justify-start mb-8 mt-10">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <div key={index} className="bg-light-green text-black rounded-lg p-2 transform transition duration-200 hover:scale-105">
              <Icon className="text-[6vw] lg:text-[2vw]" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div id="image-landing" className="flex items-center justify-center w-full lg:w-1/2">
        <img
          src={LandingPage}
          alt="Landing Page"
          className="hidden lg:block w-[80%] h-auto object-contain lg:h-[80vh]"
        />
      </div>
    </div>
  );
}
