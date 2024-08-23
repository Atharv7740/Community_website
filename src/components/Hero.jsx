import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import heroimg from '../assets/heroimg.png';
// import AvatarGroup from './AvatarGroup';

const Hero = () => {
  return (
    <section className="  h-5/6 flex items-center justify-between px-6 animate-gradient  ">
      {/* Text on the Left */}
      <div className=" max-w-lg text-left text-black">
        
        <div className='flex gap-5'>
        <a target='blank' href="https://www.instagram.com/ipucommunity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram size={50}></FaInstagram></a>
        <a href="https://www.linkedin.com/company/ipucommunity" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50}/></a>
        
        <FaWhatsapp size={50}/>
        </div>
        <br />
        <br />

        <h1 className="text-5xl font-bold">Building a community for the future</h1>
        <p className="mt-4 text-lg">
          Creating a space for various users around the world to talk on various tech topics and create solutions to bring the metaverse into reality.
        </p>
        <a target='blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeSRxUYpAldrKcR7A8ux9V4wNDgeYuV9hI2BXxE1Ta25LpMjg/viewform"><button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded">
          Join Now
        </button></a>

        
      </div>
      <div  className= 'w-[40%]   bg-blue-200 rounded-full '>
        <img  src={heroimg} alt="" />
      </div>
      
      {/* Avatars on the Right
      <div className="relative w-[50%] h-[500px] flex justify-center items-center overflow-hidden">
        <AvatarGroup />
      </div> */}
    </section>
  );
};

export default Hero;



