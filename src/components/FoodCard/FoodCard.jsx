import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const FoodCard = ({ item }) => {
   const { name, recipe, image, price, _id } = item;
   const {user} = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const axiosSecure = useAxiosSecure();
   const [,refetch] = useCarts();

   const handleAddToCart  = () => {
      if(user && user.email){
         // sent cart item to the database       
         const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
         }
         axiosSecure.post('/carts', cartItem)
         .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added to you cart`,
                  showConfirmButton: false,
                  timer: 1500
                });
               //  refetch cart to update the cart items count
               refetch();
            }
         })
      }
      else{
         //otherwise
         Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log in!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   send the user to  the login page
            navigate('/login', {state:{from:location}})
            }
          })
      }
      console.log(food, user.email);
   }
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={image} alt="Image" /></figure>
         <p className='bg-slate-900 text-white absolute right-3 px-3 top-2'> ${price} </p>
         <div className="card-body">
            <h2 className="card-title flex flex-col items-center"> {name} </h2>
            <p> {recipe} </p>
            <div className="card-actions justify-center">
               <button 
               onClick={handleAddToCart}
               className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-100 border-orange-400">Add to Cart</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;