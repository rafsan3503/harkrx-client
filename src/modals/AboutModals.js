import React, { useState } from "react";
import Swal from "sweetalert2";

const AboutModals = ({ currentUser, refetch, modalOpen, setModalOpen }) => {
  const { _id } = currentUser;
  const handleAbout = (event) => {
    setModalOpen(true);
    event.preventDefault();
    const form = event.target;
    const about = form.about.value;
    console.log(about);
    fetch(`https://harkrx-server.vercel.app/about/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ about }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "About updated successfully",
            icon: "success",
          });
          setModalOpen(false);
        }
      });
  };
  return (
    modalOpen && (
      <div>
        <input type="checkbox" id="about-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="about-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">About me</h3>
            <form onSubmit={handleAbout}>
              <textarea
                class="textarea textarea-primary w-full my-5"
                placeholder="About"
                name="about"
              ></textarea>
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

export default AboutModals;
