import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useLoggedUser from '../hooks/useLoggedUser';
import { AuthContext } from '../UserContext';
import loadingImg from '../assets/loading (2).gif';



const AdminRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    const location = useLocation();

    if (isAdminLoading) {
        return <div className="h-screen w-full flex justify-center items-center bg-base-100">
            <img src={loadingImg} alt="" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;