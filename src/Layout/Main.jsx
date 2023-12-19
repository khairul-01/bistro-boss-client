import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {

   const currentLocation = useLocation();
   console.log(currentLocation);
   const isLogin = currentLocation.pathname.includes('login')
   return (
      <div>
         { isLogin || <Navbar></Navbar>}
         <Outlet></Outlet>
         { isLogin || <Footer></Footer>}
      </div>
   );
};

export default Main;