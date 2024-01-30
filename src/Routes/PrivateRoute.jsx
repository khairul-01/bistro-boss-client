
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    console.log(location);
    
    if(loading) {
        return <div className="max-h-screen flex justify-center items-center"><progress className=" progress w-56"></progress></div>
    }
    if(user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;