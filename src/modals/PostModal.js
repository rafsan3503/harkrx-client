import React, { useState } from "react";
import Swal from "sweetalert2";

const PostModal = ({ loggedUser, modalOpen, setModalOpen, refetch }) => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const img = e.target.files[0];

    const img_api = "3be428566b26b7c4478e29333a90fdba";

    // create form Data
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${img_api}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        const imgbbUrl = image.data.url;
        setImage(imgbbUrl);
      });
  };

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;

    const post = {
      description,
      imgUrl: image,
      date: new Date(),
      authorId: loggedUser?._id,
      authorName: loggedUser?.name,
      authorImage: loggedUser?.img,
      verificationStatus: loggedUser?.verificationStatus,
    };
    fetch("https://harkrx-server.vercel.app/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setModalOpen(false);
          setImage(null);
          refetch();
          Swal.fire("Success!!", "post created successfully!!", "success");
        }
      });
  };
  return (
    modalOpen && (
      <div>
        <input type="checkbox" id="post-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box absolute top-20 w-11/12 max-w-5xl">
            <label
              htmlFor="post-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-3xl font-bold my-5">Create a post</h3>
            <hr />

            <form onSubmit={handlePost} className="my-8">
              <textarea
                className="textarea textarea-ghost w-full text-lg"
                placeholder="What you want to talk about?"
                name="description"
              ></textarea>
              {image && (
                <div>
                  <img src={image} alt="" className="w-96 mx-auto" />
                </div>
              )}
              <div className="flex justify-between items-center my-5">
                <input
                  type="file"
                  name="img"
                  onChange={handleImage}
                  className="file-input file-input-bordered file-input-success"
                />
                <button
                  type="submit"
                  className="btn btn-primary mt-5 justify-end"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default PostModal;
