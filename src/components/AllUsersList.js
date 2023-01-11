import React, { useContext } from "react";
import { FaCheck, FaPlus, FaSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/Hark.png";
import useLoggedUser from "../hooks/useLoggedUser";
import { AuthContext } from "../UserContext";

const AllUsersList = ({ allUsers }) => {
  const { user } = useContext(AuthContext);
  const { loggedUser, refetch } = useLoggedUser(user?.email);
  const followedUser = loggedUser?.followedUser;

  const handleFollow = (user) => {
    fetch(`https://harkrx-server.vercel.app/follow-user/${loggedUser?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `You are following ${user.name}`,
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="grid grid-cols-3 gap-6">
      {allUsers?.map((user) => (
        <div
          key={user._id}
          className="card flex flex-col justify-between bg-base-100 shadow-xl"
        >
          <img
            src={user?.cover ? user?.cover : logo}
            alt=""
            className="h-28 object-cover w-full"
          />
          <div className="avatar -mt-12 flex justify-center">
            <div className="w-24 rounded-full">
              <img src={user.img} alt="" />
            </div>
          </div>
          <div className="my-6 text-center">
            <Link
              to={`/feedUser/${user._id}`}
              className="text-xl font-medium hover:underline hover:text-primary"
            >
              {user.name}
            </Link>
            <p className="mt-2">{user?.headline ? user?.headline : ""}</p>
          </div>

          {followedUser?.find((usr) => usr.email === user?.email) ? (
            <button className="btn btn-disable rounded-full w-9/12 mx-auto my-4 flex items-center gap-4">
              <FaCheck /> Followed
            </button>
          ) : (
            <button
              onClick={() => handleFollow(user)}
              className="btn btn-outline btn-primary rounded-full w-9/12 mx-auto my-4 flex items-center gap-4"
            >
              <FaPlus /> Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllUsersList;
