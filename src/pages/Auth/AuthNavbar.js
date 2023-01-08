import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Hark.png";

const AuthNavbar = () => {
  return (
    <div className="bg-base-100 w-full shadow-lg">
      <div className="navbar  container mx-auto">
        <div className="navbar-start gap-4">
          <img src={logo} alt="" className="w-20 rounded-lg" />
        </div>

        <div className="navbar-end gap-6 ">
          <Link
            to="/login"
            className="btn  rounded-full bg-base-100 text-success border-none hover:bg-success hover:text-white"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="btn rounded-full btn-success text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
