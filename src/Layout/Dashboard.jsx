import { FaCalendarAlt, FaCartPlus } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";


const Dashboard = () => {
   const [cart] = useCarts();
   return (
      <div className="flex">
         {/* Dashboard side bar */}
         <div className="w-64 min-h-screen bg-orange-200">
            <ul>
               <li>                 
                  <NavLink to={'/dashboard/userHome'} className='flex items-center gap-2 pl-2'><AiFillHome /> User Home</NavLink>
               </li>
               <li>                 
                  <NavLink to={'/dashboard/reservation'} className='flex items-center gap-2 pl-2'><FaCalendarAlt /> Reservation</NavLink>
               </li>
               <li>                 
                  <NavLink to='/dashboard/cart' className='flex items-center gap-2 pl-2'><FaCartPlus></FaCartPlus> My Cart ({cart.length}) </NavLink>
               </li>
               <li>                 
                  <NavLink to={'/dashboard/review'} className='flex items-center gap-2 pl-2'><VscPreview /> Add Review</NavLink>
               </li>
               <li>                 
                  <NavLink to={'/dashboard/bookings'} className='flex items-center gap-2 pl-2'><BsFillBookmarkStarFill /> My Bookings</NavLink>
               </li>
               <div className="divider divider-neutral"></div>
               <li>                 
                  <NavLink to={'/'} className='flex items-center gap-2 pl-2'><AiFillHome />Home</NavLink>
               </li>
               <li><NavLink to='/order/salad' className='flex items-center gap-2 pl-2'><IoBagAdd /> Order Food</NavLink></li>
            </ul>
         </div>
         {/* Dashboard content */}
         <div className="flex-1 p-8">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Dashboard;