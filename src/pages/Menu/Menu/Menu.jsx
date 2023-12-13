import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from './../../Home/PopularMenu/PopularMenu';


const Menu = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro | Menu</title>
         </Helmet>
         <Cover img={menuImg} title='our menu'></Cover>

      </div>
   );
};

export default Menu;