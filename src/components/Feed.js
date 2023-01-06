import React, { useContext } from "react";
import { FaInfo, FaPlus, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext";

const Feed = () => {
  const { users } = useContext(AuthContext);
  console.log(users);
  return (
    <div className="card bg-base-100 border border-green-400 shadow-xl">
      <div>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            Add to your feed <FaInfo />
          </h2>
          {users.map((user) => (
            <Link
              to={`/user/${user._id}`}
              key={user._id}
              className="my-2 flex gap-4 items-start"
            >
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img src={user.img} alt="" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium">{user.name}</h2>
                <small>
                  Managing Director of Noman Group of Industries & Talha Group |
                  CIP |
                </small>
                <button className="btn btn-outline rounded-full text-green-400 flex gap-2 items-center mt-4">
                  <FaPlus /> Follow
                </button>
              </div>
            </Link>
          ))}

          <p className="flex gap-4 text-lg items-center ">
            View all <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
