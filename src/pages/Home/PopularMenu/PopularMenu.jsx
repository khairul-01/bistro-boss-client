
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular');

   return (
      <section className="mb-12">
         <SectionTitle
            heading="From Our Menu"
            subHeading='Popular Items'
         ></SectionTitle>
         <div className="grid md:grid-cols-2 gap-10">
            {
               popular.map(item => <MenuItems
                  key={item._id}
                  item={item}
               ></MenuItems>)
            }
         </div>
         <div className="flex justify-center my-10">
            <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">View Full Menu</button>
         </div>
      </section>
   );
};

export default PopularMenu;