import React from "react";
import { FaPhotoVideo } from "react-icons/fa";

const PostModal = ({ loggedUser }) => {
  return (
    <div>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box absolute top-20 w-11/12 max-w-5xl min-h-[50vh]">
          <label
            htmlFor="post-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold my-5">Create a post</h3>
          <hr />
          {/* <div className="my-5 flex gap-4 items-center">
            <div className="avatar flex">
              <div className="w-20 rounded-full">
                <img src={loggedUser?.img} alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{loggedUser?.name}</h2>
            </div>
          </div> */}
          <form>
            <textarea
              className="textarea textarea-ghost w-full text-lg"
              placeholder="What you want to talk about?"
            ></textarea>
            <button type="file" className="btn btn-ghost">
              <h2 className="text-md text-teal-400 flex items-center gap-4">
                <FaPhotoVideo />
                Add Media
              </h2>
            </button>
            <button className="btn btn-primary mt-5 justify-end">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
