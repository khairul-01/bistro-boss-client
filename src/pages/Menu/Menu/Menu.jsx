import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
   const [menu] = useMenu();
   const dessert = menu.filter(item => item.category === 'dessert');
   const pizza = menu.filter(item => item.category === 'pizza');
   const salad = menu.filter(item => item.category === 'salad');
   const soup = menu.filter(item => item.category === 'soup');
   const offered = menu.filter(item => item.category === 'offered');
   return (
      <div>
         <Helmet>
            <title>Bistro | Menu</title>
         </Helmet>
         <Cover img={menuImg} title='OUR MENU'></Cover>
         {/* Main cover */}
         <SectionTitle
            subHeading='Do not miss'
            heading="toda'y offer"
         ></SectionTitle>
         {/* Offered menu items */}
         <MenuCategory items={offered}></MenuCategory>
         {/* dessert menu items */}
         <MenuCategory items={dessert} title='desserts' coverImg={desertImg}></MenuCategory>
         {/* pizza menu items */}
         <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>
         {/* Salad menu items */}
         <MenuCategory items={salad} title='salad' coverImg={saladImg}></MenuCategory>
         {/* Soup menu items */}
         <MenuCategory items={soup} title='soup' coverImg={soupImg}></MenuCategory>
      </div>
   );
};

export default Menu;