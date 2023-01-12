import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiComment, BiFlag, BiHeart, BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext";
import userPhoto from "../assets/user.png";

const Post = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const { description, imgUrl, authorName, authorId, date, authorImage } = post;

  return (
    <div className="flex mt-4 flex-col border p-6 space-y-6 overflow-hidden rounded-lg shadow-md  bg-base-100 border-teal-300 w-full mx-auto">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <img
            alt=""
            src={authorImage}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <Link
              to={`/feedUser/${authorId}`}
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {authorName}
            </Link>
            <span className="text-xs dark:text-gray-400">
              {date.slice(0, 10)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-teal-400 cursor-pointer">
          <FaPlus />
          <p>Follow</p>
        </div>
      </div>
      <div>
        <p className="my-5 text-xl">{description}</p>
        {imgUrl && (
          <img
            src={imgUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 rounded-lg sm:h-96 dark:bg-gray-500"
          />
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex text-lg items-center">
          <BiLike className="text-blue-500" />
          <BiHeart className="-ml-1 text-red-500" />
          <span>3</span>
        </div>
        <div className="hover:text-blue-500 hover:underline">
          <Link>2 comments</Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap justify-evenly">
        <div className="dropdown dropdown-top dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost text-xl gap-2">
            <BiLike />
            <p>Like</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-horizontal p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <BiLike />
            </li>
            <li>
              <BiHeart />
            </li>
          </ul>
        </div>

        <button
          onClick={() => setShowCommentBox(true)}
          className="btn btn-ghost text-xl gap-2"
        >
          <BiComment />
          <p>Comment</p>
        </button>
        <button className="btn btn-ghost text-xl gap-2">
          <BiFlag />
          <p>Report</p>
        </button>
      </div>
      {showCommentBox && (
        <div>
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL ? user.photoURL : userPhoto} alt="" />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Write comment"
                className="input w-full input-bordered border-teal-300 rounded-full py-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
