import React, { useContext, useState } from "react";
import { FaDotCircle, FaPlus } from "react-icons/fa";
import { BiComment, BiFlag, BiHeart, BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext";
import { v4 as uuid } from "uuid";
import userPhoto from "../assets/user.png";
import useLoggedUser from "../hooks/useLoggedUser";
import Swal from "sweetalert2";

const Post = ({ post, refetch }) => {
  const { user } = useContext(AuthContext);
  const { loggedUser } = useLoggedUser(user?.email);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const {
    _id,
    description,
    likes,
    comments,
    imgUrl,
    authorName,
    authorId,
    date,
    authorImage,
    reports,
  } = post;

  const handleLike = (id) => {
    fetch(`https://harkrx-server.vercel.app/like/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ authorId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    const comment = {
      commentId: uuid(),
      commentText,
      authorId: loggedUser?._id,
      authorImage: loggedUser?.img,
      authorName: loggedUser?.name,
      date: new Date(),
    };

    fetch(`https://harkrx-server.vercel.app/comment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          e.target.reset();
        }
      });
  };

  const handleReport = (id) => {
    fetch(`https://harkrx-server.vercel.app/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ reportUserId: loggedUser?._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success!", "This post is reported to admin", "success");
        }
      });
  };

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
          <span>{likes ? likes?.length : 0}</span>
        </div>
        <div
          onClick={() => setShowCommentBox(true)}
          className="hover:text-blue-500 hover:underline"
        >
          <Link>
            {comments ? comments.length : 0}{" "}
            {comments?.length > 1 ? "comments" : "comment"}
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap justify-evenly">
        <div className="dropdown dropdown-top dropdown-hover">
          {likes?.find((like) => like === authorId) ? (
            <label className="btn btn-disabled text-blue-500 text-xl gap-2">
              <BiLike />
              <p>Liked</p>
            </label>
          ) : (
            <label
              onClick={() => handleLike(_id)}
              className="btn btn-ghost text-xl gap-2"
            >
              <BiLike />
              <p>Like</p>
            </label>
          )}
        </div>

        <button
          onClick={() => setShowCommentBox(true)}
          className="btn btn-ghost text-xl gap-2"
        >
          <BiComment />
          <p>Comment</p>
        </button>
        {reports?.find((report) => report === loggedUser?._id) ? (
          <button className="btn btn-disabled text-xl gap-2">
            <BiFlag />
            <p>Reported</p>
          </button>
        ) : (
          <button
            onClick={() => handleReport(_id)}
            className="btn btn-ghost text-xl gap-2"
          >
            <BiFlag />
            <p>Report</p>
          </button>
        )}
      </div>
      {showCommentBox && (
        <div>
          <div className="flex gap-2 mb-5 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={loggedUser?.img} alt="" />
              </div>
            </div>
            <form onSubmit={handleComment} className="w-full">
              <input
                type="text"
                placeholder="Write comment"
                name="comment"
                className="input w-full input-bordered border-teal-300 rounded-full py-2"
              />
            </form>
          </div>
          <hr />
          {comments &&
            comments.map((comment) => (
              <div className="flex my-4 gap-2 items-start">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={comment?.authorImage} alt="" />
                  </div>
                </div>
                <div className="bg-gray-300 p-4 w-full rounded-xl">
                  <h3 className="text-lg font-medium flex items-center justify-between">
                    {comment?.authorName} <BsThreeDots />
                  </h3>
                  <p className=" w-full">{comment?.commentText}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Post;
