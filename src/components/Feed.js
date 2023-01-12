import React, { useContext, useEffect, useState } from "react";
import { FaInfo, FaPlus, FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useLoggedUser from "../hooks/useLoggedUser";
import { AuthContext } from "../UserContext";

const Feed = () => {
  const { user } = useContext(AuthContext);
  const { loggedUser, refetch } = useLoggedUser(user?.email);
  const followedUser = loggedUser?.followedUser;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://harkrx-server.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [user?.email]);

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
    <div className="card bg-base-100 border border-teal-300 shadow-xl ">
      <div>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            Add to your feed <FaInfo />
          </h2>
          {users.slice(0, 3).map((user) => (
            <div key={user._id} className="my-2 flex gap-4 items-start">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img src={user.img} alt="" />
                </div>
              </div>
              <div>
                <Link
                  to={`/feedUser/${user._id}`}
                  className="text-xl font-medium hover:text-teal-400 hover:underline"
                >
                  {user.name}
                </Link>
                <small>{user?.headline}</small>
                {/* <button className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4">
                  <FaPlus /> Follow
                </button> */}
                {followedUser?.find((usr) => usr.email === user?.email) ? (
                  <button className="btn btn-outline btn-disabled rounded-full text-teal-400 flex gap-2 items-center mt-4">
                    <FaCheck /> Followed
                  </button>
                ) : (
                  <button
                    onClick={() => handleFollow(user)}
                    className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4"
                  >
                    <FaPlus /> Follow
                  </button>
                )}
              </div>
            </div>
          ))}

          <Link to="/allUsers" className="flex gap-4 text-lg items-center ">
            View all <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;
