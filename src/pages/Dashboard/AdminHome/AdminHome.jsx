
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaDollarSign, FaJediOrder, FaProductHunt, FaUser } from 'react-icons/fa';

const AdminHome = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const { data: stats } = useQuery({
      queryKey: ["admin-stats"],
      queryFn: async () => {
         const res = await axiosSecure.get('/admin-stats');
         return res.data
      }
   })
   return (
      <div>
         <h1 className="text-3xl">
            <span>Hi, Welcome </span>
            {
               user?.displayName ? user.displayName : "Back"
            }
         </h1>
         <div className="stats shadow">

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaDollarSign className='text-3xl'></FaDollarSign>
                  
               </div>
               <div className="stat-title">Revenue</div>
               <div className="stat-value">${stats?.revenue}</div>
               <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaUser className='text-3xl'></FaUser>
               </div>
               <div className="stat-title">Users</div>
               <div className="stat-value"> {stats?.users} </div>
               <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaProductHunt className='text-3xl'></FaProductHunt>
               </div>
               <div className="stat-title">Products</div>
               <div className="stat-value"> {stats?.menuItems} </div>
               <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <FaJediOrder className='text-3xl'></FaJediOrder>
               </div>
               <div className="stat-title">Orders</div>
               <div className="stat-value"> {stats?.orders} </div>
               <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

         </div>
      </div>
   );
};

export default AdminHome;