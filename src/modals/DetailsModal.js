import React from "react";
import Swal from "sweetalert2";

const DetailsModal = ({ currentUser, refetch, setModalOpen, modalOpen }) => {
  const handleInformation = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const headline = form.headline.value;
    const address = form.address.value;
    const data = {
      name,
      headline,
      address,
    };
    fetch(`https://harkrx-server.vercel.app/information/${currentUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Informaion updated successfully",
            icon: "success",
          });
          setModalOpen(false);
        }
      });
  };
  return (
    modalOpen && (
      <div>
        <input type="checkbox" id="details-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="details-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">Full Information</h3>
            <form onSubmit={handleInformation} className="my-5">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full my-2"
                />
              </div>
              <div>
                <label htmlFor="headline">Headline</label>
                <input
                  type="text"
                  name="headline"
                  className="input input-bordered w-full my-2"
                />
              </div>
              <div>
                <label htmlFor="contact">Address</label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full my-2"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default DetailsModal;
