import React, { useContext } from "react";
import { FaPhotoVideo, FaBlogger } from "react-icons/fa";
import { AuthContext } from "../UserContext";
import userPhoto from "../assets/user.png";
import useLoggedUser from "../hooks/useLoggedUser";
import PostModal from "../modals/PostModal";

const WritePost = () => {
  const { user } = useContext(AuthContext);
  const { loggedUser } = useLoggedUser(user?.email);

  return (
    <div className="card bg-base-100 border border-teal-300 mb-5 p-6 w-full">
      <div className="flex gap-2 items-center">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={loggedUser?.img} alt="" />
          </div>
        </div>
        <label for="post-modal" className="w-full">
          <p className="w-full text-xl font-light text-gray-400 border border-teal-300 rounded-full p-4">
            Write Post
          </p>
        </label>
      </div>
      <div className="mt-5">
        <button className="btn btn-ghost">
          <h2 className="text-md text-teal-400 flex items-center gap-4">
            <FaPhotoVideo />
            Add Media
          </h2>
        </button>
        <button className="btn btn-ghost">
          <h2 className="text-md text-teal-400 flex items-center gap-4">
            <FaBlogger />
            Post
          </h2>
        </button>
      </div>
      <PostModal loggedUser={loggedUser} />
    </div>
  );
};

export default WritePost;
