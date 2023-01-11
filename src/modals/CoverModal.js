import React, { useState } from "react";
import Swal from "sweetalert2";

const CoverModal = ({ currentUser, refetch, modalOpen, setModalOpen }) => {
  const [image, setImage] = useState(
    currentUser?.cover ? currentUser?.cover : null
  );
  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUploadCover = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.files[0];

    const img_api = "3be428566b26b7c4478e29333a90fdba";

    // create form Data
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${img_api}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.url;

        fetch(`http://localhost:5000/cover/${currentUser._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ img }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Cover Photo uploaded",
                icon: "success",
              });
              setModalOpen(false);
            }
          });
      });
  };

  return (
    modalOpen && (
      <div>
        <input type="checkbox" id="cover-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <label
              htmlFor="cover-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-3xl text-center my-5 font-bold">
              Change your cover photo!!
            </h3>
            {image && (
              <div className="w-11/12 mx-auto">
                <img
                  src={image}
                  alt=""
                  className="w-auto h-96 object-cover mx-auto"
                />
              </div>
            )}
            <form onSubmit={handleUploadCover} className="flex justify-between">
              <input
                type="file"
                name="image"
                accept="image/*"
                className="file-input file-input-bordered file-input-primary max-w-md"
                onChange={handleImage}
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default CoverModal;
