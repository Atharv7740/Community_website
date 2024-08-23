import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <nav className='h-1/6   flex justify-between items-center'>
        <div className='h-[100]%  '>
        <img  src={logo} alt="Community Logo" className="h-28 rounded-md object-cover" />
        </div>
       
        
        
        <div className='flex gap-5  text-xl'>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/About'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''}  to='/Team'> Team </NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/Contact'>Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/Events'>Events</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/'></NavLink>

        </div>
        
    </nav>

    // <header className="flex justify-between items-center p-6">
    //     {/* <NavLink  to=""> </NavLink> */}
    //     <div className="flex items-center">
    //     <img src={logo} alt="Community Logo" className="h-32 w-auto mr-2 rounded-md" />
    //    </div>
      
    //   <nav className="flex space-x-6 ">
    //     <a href="#" className="text-black">Create</a>
    //     <a href="#" className="text-black">Explore</a>
    //     <button className="bg-blue-600 text-white py-2 px-4 rounded">Join Now</button>
    //   </nav>
    // </header>
  );
};

export default Header;