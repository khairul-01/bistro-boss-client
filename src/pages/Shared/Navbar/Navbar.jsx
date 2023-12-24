import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const [cart] = useCarts();
   const hadleLogout = () => {
      logOut()
         .then(() => {
            console.log("Successfully Logged out")

         })
         .catch(error => console.log(error))
   }
   const navOptions = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/menu'>Our Menu</NavLink></li>
      <li><NavLink to='/order/salad'>Order Food</NavLink></li>
      <li><NavLink to='/signup'>Register</NavLink></li>
      <li><NavLink to='/secret'>Secret</NavLink></li>
      <li>
         <NavLink to={'/dashboard/cart'}>
            <button className="flex items-center">
               <FaCartPlus />
               <div className="badge badge-secondary ml-2">+{cart.length}</div>
            </button>
         </NavLink>
      </li>
      {
         user ? <>
            <li><button onClick={hadleLogout} className="">Log out</button></li>
         </>
            :
            <>
               <li><Link to='/login'>Login</Link></li>
            </>
      }
   </>
   return (
      <>
         <div className="navbar fixed z-10 bg-opacity-30 bg-gray-500 max-w-screen-xl text-white">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navOptions}
                  </ul>
               </div>
               <div className="btn btn-ghost flex flex-col">
                  <div className="flex flex-col">
                     <p className="text-xl uppercase">Bistro Boss</p>
                     <p className="text-sm uppercase">Restaurent</p>
                  </div>
               </div>

            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navOptions}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
      </>
   );
};

export default Navbar;