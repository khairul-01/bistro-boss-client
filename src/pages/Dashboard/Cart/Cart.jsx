import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
   const [cart, refetch] = useCarts();
   const totalPrice = cart.reduce((total, currentItem) => total + currentItem.price, 0);
   const axiosSecure = useAxiosSecure();

   const handleDelete = id => {
      console.log(id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     console.log(res.data);
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                     });
                  }

               })
         }
      });
   }
   return (
      <div>
         <div className="flex justify-evenly mb-8">
            <h1 className="text-5xl">Items: {cart.length} </h1>
            <h1 className="text-5xl">Total Price: {totalPrice} </h1>

            {
               cart.length ? <Link to='/dashboard/payment'>
                  <button className="btn btn-primary">Pay</button>
               </Link>
                  :
                  <button disabled className="btn btn-primary">Pay</button>
            }
         </div>
         <div className="overflow-x-auto">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>
                        Item Image
                     </th>
                     <th>Item Name</th>
                     <th>Price</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     cart.map((item, index) => <tr key={item._id}>
                        <th>
                           {index + 1}
                        </th>
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>

                           </div>
                        </td>
                        <td>
                           {item.name}
                        </td>
                        <td> {item.price} </td>
                        <th>
                           <button onClick={() => handleDelete(item._id)}
                              className="btn btn-error text-slate-300 text-xl"> <MdDelete /> </button>
                        </th>
                     </tr>)
                  }

               </tbody>

            </table>
         </div>
      </div>
   );
};

export default Cart;