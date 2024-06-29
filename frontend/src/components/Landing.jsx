// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import  LandingPage  from "../assets/LandingPage.png"


// export default function Landing() {
//     return <>
//     <div className="h-screen bg-slate-950 p-20 flex flex-col">

//             <div>
//             <div className="relative h-64 flex items-center justify-center text-center w-1/2">
//             <h1 className="text-[15rem] font-bold text-light-green opacity-55 absolute inset-0 flex items-center justify-center">
//                 Sports
//             </h1>
//             <h1 className="text-white text-[4rem] font-bold relative text-left mt-60">
//                 Sport Is 
//                 <br></br><span>Important For</span>
//                 <br></br><span> Good Health</span>
//             </h1>
//             </div>
            
//             <div className="text-white mt-40 w-1/2 pl-28 opacity-70 text-lg">
//              Our mission is to create state-of-the-art sports infrastructure that inspires excellence, fosters community engagement, and promotes healthy lifestyles. From local community fields to professional stadiums, we are dedicated to developing safe, sustainable, and innovative spaces that support athletes at every level.
//             </div>
//             <div className="flex space-x-4 mt-10 pl-28">
//             <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
//                 <FaFacebookF className="text-2xl" />
//             </div>
//             <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
//                 <FaTwitter className="text-2xl" />
//             </div>
//             <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
//                 <FaInstagram className="text-2xl" />
//             </div>
//             <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
//                 <FaLinkedinIn className="text-2xl" />
//             </div>
//             </div>
//             </div>

//         </div>
//         <div id='image-landing'>
//             <img src={LandingPage} alt="Landing Page" className="w-full"/>
//         </div>
    
//     </>
    
        

// }

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LandingPage from '../assets/LandingPage.png';

export default function Landing() {
  return (
    <div className="h-screen bg-slate-950 p-8 flex">
      <div className="flex flex-col justify-start mt-20 w-1/2 pr-10">
        <div className="relative h-64 flex items-center justify-center text-center">
          <h1 className="text-[15rem] font-bold text-light-green opacity-10 absolute inset-0 flex items-center justify-center">
            Sports
          </h1>
          <h1 className="text-white text-[4rem] font-bold relative text-left mt-48">
            Sport Is
            <br />
            <span>Important For</span>
            <br />
            <span>Good Health</span>
          </h1>
        </div>

        <div className="text-white mt-36 opacity-70 text-lg pl-36">
          Our mission is to create state-of-the-art sports infrastructure that inspires excellence, fosters community engagement, and promotes healthy lifestyles. From local community fields to professional stadiums, we are dedicated to developing safe, sustainable, and innovative spaces that support athletes at every level.
        </div>

        <div className="flex space-x-4 mt-10 pl-36">
          <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
            <FaTwitter className="text-2xl" />
          </div>
          <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
            <FaInstagram className="text-2xl" />
          </div>
          <div className="bg-light-green text-black rounded-lg transform skew-x-2 p-3">
            <FaLinkedinIn className="text-2xl" />
          </div>
        </div>
      </div>

      <div id="image-landing" className="w-1/2 flex items-center justify-center transform">
        <img src={LandingPage} alt="Landing Page" className="w-full object-cover h-3/4" />
      </div>
    </div>
  );
}
