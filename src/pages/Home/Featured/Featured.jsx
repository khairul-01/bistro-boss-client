import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg' 
import './Featured.css'

const Featured = () => {
   return (
      <div className="featured-item text-white pt-8 my-20 bg-fixed">
         <SectionTitle
            subHeading="Check it out"
            heading="Featured Items"
         ></SectionTitle>
         <div className="md:flex justify-center items-center gap-8 py-20 md:px-36 bg-slate-500 bg-opacity-40">
            <div>
               <img src={featuredImg} alt="" />
            </div>
            <div>
               <p>December 12, 2023</p>
               <p className="uppercase">Where can i get some ?</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto animi perferendis corporis aspernatur? Consequuntur earum possimus voluptatem nulla? Recusandae, perspiciatis, sint maiores ducimus dolorem sunt ut et praesentium beatae reiciendis quos expedita cum vitae at error harum repudiandae magnam fugiat, dolores nam. Deserunt sit obcaecati odio quidem doloribus quo.
               </p>
               <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
         </div>
      </div>
   );
};

export default Featured;