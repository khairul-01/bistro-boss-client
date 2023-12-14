import React from 'react';

const FoodCard = ({ item }) => {
   const { name, recipe, image, price } = item;
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image} alt="Image" /></figure>
         <div className="card-body">
            <h2 className="card-title"> {name} </h2>
            <p> {recipe} </p>
            <div className="card-actions justify-end">
               <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Add to Cart</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;