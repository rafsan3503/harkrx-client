import React, { useContext } from "react";
import { AuthContext } from "../UserContext";

const Profile = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <div>
      <div className="border border-green-400 rounded-lg bg-white overflow-hidden">
        <img src={loggedUser.img} alt="" className="h-28 object-cover w-full" />
        <div className="avatar -mt-12 flex justify-center">
          <div className="w-24 rounded-full">
            <img src={loggedUser.img} alt="" />
          </div>
        </div>
        <div className="my-6 text-center">
          <h2 className="text-xl font-medium">{loggedUser.name}</h2>
          <p className="mt-2">
            Mern Stack Web Developer || React Js || Javascript || Mongo DB ||
            Node Js
          </p>
        </div>
        <hr />
        <div>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Following <span>30</span>
          </button>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Posts <span>30</span>
          </button>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg bg-white overflow-hidden mt-4 ">
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
          <li>
            <a>Groups</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Followers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
