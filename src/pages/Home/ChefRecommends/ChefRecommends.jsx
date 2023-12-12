import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from '../../../assets/home/slide5.jpg'


const ChefRecommends = () => {
   return (
      <section>
         <SectionTitle
            heading="chef recommends"
            subHeading="Should Try"
         ></SectionTitle>
         <div className="grid md:grid-cols-3 gap-3">
            
            <div className="card bg-base-100 shadow-xl">
               <figure className="px-1 pt-1">
                  <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-full" />
               </figure>
               <div className="card-body items-center text-center">
                  <h2 className="card-title">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan, Cheese, Chicken, Fillets</p>
                  <div className="card-actions">
                     <button className="btn btn-primary uppercase">Add to cart</button>
                  </div>
               </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
               <figure className="px-1 pt-1">
                  <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-full" />
               </figure>
               <div className="card-body items-center text-center">
                  <h2 className="card-title">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan, Cheese, Chicken, Fillets</p>
                  <div className="card-actions">
                     <button className="btn btn-primary uppercase">Add to cart</button>
                  </div>
               </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
               <figure className="px-1 pt-1">
                  <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-full" />
               </figure>
               <div className="card-body items-center text-center">
                  <h2 className="card-title">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan, Cheese, Chicken, Fillets</p>
                  <div className="card-actions">
                     <button className="btn btn-primary uppercase">Add to cart</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ChefRecommends;