import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../UserContext";

const ImageModal = ({ currentUser, refetch, setModalOpen, modalOpen }) => {
  const [src, setSrc] = useState(currentUser.img);

  const handleImageChange = (event) => {
    setSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleImage = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.photo.files[0];

    const img_api = "3be428566b26b7c4478e29333a90fdba";

    // create form Data
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${img_api}`;

    // post image to imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        const img = image.data.url;
        console.log(img);

        fetch(`https://harkrx-server.vercel.app/picture/${currentUser._id}`, {
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
                title: "Picture updated successfully",
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
        <input type="checkbox" id="image-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="image-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Update Profile Picture</h3>
            {src && (
              <div>
                <img src={src} alt="" />
              </div>
            )}
            <form onSubmit={handleImage}>
              <div>
                <input
                  type="file"
                  required
                  name="photo"
                  className="file-input file-input-bordered file-input-transparent w-full mb-2 mt-2"
                  onChange={handleImageChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default ImageModal;
