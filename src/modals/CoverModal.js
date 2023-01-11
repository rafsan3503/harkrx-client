import React, { useState } from "react";

const CoverModal = () => {
  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
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
          <h3 className="text-lg font-bold">Change your cover photo!!</h3>
          {image && <img src={image} alt="" />}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverModal;
