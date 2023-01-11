import React, { useContext } from "react";
import { AuthContext } from "../UserContext";
import loadingImg from "../assets/loading (2).gif";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-base-100">
        <img src={loadingImg} alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
