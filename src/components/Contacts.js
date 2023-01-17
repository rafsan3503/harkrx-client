import React, { useContext } from "react";
import { FaEye, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLoggedUser from "../hooks/useLoggedUser";
import { AuthContext } from "../UserContext";
import Feed from "./Feed";

const Contacts = () => {
  const { user } = useContext(AuthContext);
  const { loggedUser } = useLoggedUser(user?.email);
  const followedUsers = loggedUser?.followedUser;

  return (
    <div className="sticky top-0">
      <div className="card mb-10 bg-base-100 border border-teal-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            Following <FaInfo />
          </h2>
          {followedUsers?.map((followedUser) => (
            <div
              key={followedUser?._id}
              className="my-2 flex gap-4 items-start"
            >
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img src={followedUser?.img} alt="" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium">{followedUser?.name}</h2>
                <small>{followedUser?.headline}</small>
                <Link
                  to={`/feedUser/${followedUser?._id}`}
                  className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4"
                >
                  <FaEye /> View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Feed />
    </div>
  );
};

export default Contacts;
