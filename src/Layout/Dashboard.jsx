import { FaBook, FaCalendarAlt, FaCartPlus, FaThList } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import { MdOutlineContactPhone } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
   const [cart] = useCarts();
   // TODO: get admin value from the database
   const [isAdmin] = useAdmin();
   return (
      <div className="flex">
         {/* Dashboard side bar */}
         <div className="w-64 min-h-screen bg-orange-200 px-3 py-8">
            <ul>
               {
                  isAdmin ? <>
                     <li>
                        <NavLink to={'/dashboard/adminHome'} className='flex items-center gap-2 pl-2'><AiFillHome /> Admin Home</NavLink>
                     </li>
                     <li>
                        <NavLink to={'/dashboard/addItems'} className='flex items-center gap-2 pl-2'><ImSpoonKnife /> Add Items</NavLink>
                     </li>
                     <li>
                        <NavLink to='/dashboard/manageItems' className='flex items-center gap-2 pl-2'><FaThList /> Manage Items </NavLink>
                     </li>
                     <li>
                        <NavLink to={'/dashboard/bookings'} className='flex items-center gap-2 pl-2'><FaBook /> Manage Bookings</NavLink>
                     </li>
                     <li>
                        <NavLink to={'/dashboard/users'} className='flex items-center gap-2 pl-2'><HiUserGroup /> All Users</NavLink>
                     </li>
                  </>
                     :
                     <>
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

                     </>
               }
               <div className="divider divider-neutral"></div>
               <li>
                  <NavLink to={'/'} className='flex items-center gap-2 pl-2'><AiFillHome />Home</NavLink>
               </li>
               <li><NavLink to='/order/salad' className='flex items-center gap-2 pl-2'><IoBagAdd /> Order Food</NavLink></li>
               <li><NavLink to='/order/contact' className='flex items-center gap-2 pl-2'><MdOutlineContactPhone /> Contact</NavLink></li>
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