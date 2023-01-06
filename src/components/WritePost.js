import React, { useContext } from "react";
import { FaPhotoVideo, FaBlogger } from "react-icons/fa";
import { AuthContext } from "../UserContext";
import userPhoto from "../assets/user.png";

const WritePost = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="card bg-white border border-green-400 mb-5 p-6 w-full">
      <div className="flex gap-2 items-center">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={user?.photoURL ? user.photoURL : userPhoto} alt="" />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Write post"
            className="input w-full input-bordered border-green-400 rounded-full py-2"
          />
        </div>
      </div>
      <div className="mt-5">
        <button className="btn btn-ghost">
          <h2 className="text-md text-green-400 flex items-center gap-4">
            <FaPhotoVideo />
            Add Media
          </h2>
        </button>
        <button className="btn btn-ghost">
          <h2 className="text-md text-green-400 flex items-center gap-4">
            <FaBlogger />
            Post
          </h2>
        </button>
      </div>
    </div>
  );
};

export default WritePost;
