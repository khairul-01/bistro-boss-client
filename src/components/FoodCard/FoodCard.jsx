import React from 'react';

const FoodCard = ({ item }) => {
   const { name, recipe, image, price } = item;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image} alt="Image" /></figure>
         <p className='bg-slate-900 text-white absolute right-3 px-3 top-2'> ${price} </p>
         <div className="card-body">
            <h2 className="card-title flex flex-col items-center"> {name} </h2>
            <p> {recipe} </p>
            <div className="card-actions justify-center">
               <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-100 border-orange-400">Add to Cart</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;