import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../../Shared/cover/Cover";


const MenuCategory = ({ items, title, coverImg }) => {

   return (
      <div className="pb-10">
         {
            title && <Cover className='py-8' img={coverImg} title={title}></Cover>
         }
         <div className="grid md:grid-cols-2 gap-10 mt-16">
            {
               items.map(item => <MenuItems
                  key={item._id}
                  item={item}
               ></MenuItems>)
            }
         </div>
         <div className="flex justify-center my-10">
            <Link to={`/order/${title}`}>
               <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Order Your Favourite Food</button>
            </Link>
         </div>
      </div>
   );
};

export default MenuCategory;