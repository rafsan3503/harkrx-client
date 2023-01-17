import React, { useContext } from "react";
import useLoggedUser from "../hooks/useLoggedUser";
import { AuthContext } from "../UserContext";
import logo from "../assets/Hark.png";
import { MdVerified } from "react-icons/md";
import usePosts from "../hooks/usePosts";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { posts } = usePosts();

  const { loggedUser } = useLoggedUser(user?.email);
  const userPosts = posts?.filter((post) => post?.authorId === loggedUser?._id);

  return (
    <div className="sticky top-0">
      <div className="border border-teal-300 rounded-lg bg-base-100 overflow-hidden">
        <img
          src={loggedUser?.cover ? loggedUser?.cover : logo}
          alt=""
          className="h-28 object-cover w-full"
        />
        <div className="avatar -mt-12 flex justify-center">
          <div className="w-24 rounded-full">
            <img src={loggedUser?.img} alt="" />
          </div>
        </div>
        <div className="my-6 text-center">
          <h2 className="text-xl font-medium flex justify-center items-center gap-2">
            {loggedUser?.name}{" "}
            {loggedUser?.verificationStatus === "verified" && (
              <MdVerified className="text-blue-500 text-xl font-blue" />
            )}
          </h2>
          <p className="mt-2">{loggedUser?.headline}</p>
        </div>
        <hr />
        <div>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Following{" "}
            <span>{loggedUser ? loggedUser.followedUser?.length : 0}</span>
          </button>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Posts <span>{userPosts ? userPosts?.length : 0}</span>
          </button>
        </div>
      </div>
      <div className="border border-teal-300 rounded-lg overflow-hidden mt-4 ">
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box ">
          <li>
            <Link to="/user">View profile</Link>
          </li>
          <li>
            <Link to="/allUsers">Find people</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
