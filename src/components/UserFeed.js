import React, { useContext, useState } from "react";
import { FaMinus, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutModals from "../modals/AboutModals";
import CoverModal from "../modals/CoverModal";
import DetailsModal from "../modals/DetailsModal";
import { AuthContext } from "../UserContext";
import Post from "./Post";
import WritePost from "./WritePost";

const UserFeed = ({ currentUser, refetch }) => {
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(true);
  const [isWrite, setIsWrite] = useState(false);

  return (
    <section>
      <div className="border border-teal-300 rounded-xl bg-base-100">
        <div className="p-4 relative">
          <img
            src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="h-80 rounded-xl w-full object-cover"
          />
          {user?.email === currentUser?.email && (
            <label
              htmlFor="cover-modal"
              className="p-4 absolute top-10 right-10 text-teal-400 bg-base-100 rounded-full border border-teal-300"
            >
              <FaPencilAlt className="text-xl" />
            </label>
          )}
        </div>

        <div className="-mt-32">
          <div className="avatar pl-14">
            <div className="w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src={currentUser?.img} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-14 pt-6 mb-8 relative">
          <div className="flex gap-6 ">
            <div>
              <h2 className="text-5xl font-bold">{currentUser?.name}</h2>
              <p className="text-xl mt-3">
                {currentUser.headline
                  ? currentUser?.headline
                  : "please add headline"}
              </p>
              <p className="text-lg my-5">
                {currentUser?.address
                  ? currentUser?.address
                  : "please add address"}
              </p>
              <div className="flex gap-4 ">
                {user?.email === currentUser?.email && (
                  <label className="p-4 absolute top-10 right-10 text-teal-400 bg-base-100 rounded-full border border-teal-300">
                    <FaPencilAlt className="text-xl" />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div>
            {user?.email === currentUser?.email && (
              <label
                for="details-modal"
                onClick={() => setModalOpen(true)}
                className="p-4 absolute top-10 right-10 text-teal-400 bg-base-100 rounded-full border border-teal-300"
              >
                <FaPencilAlt className="text-xl" />
              </label>
            )}
          </div>
        </div>
      </div>
      <section className="mt-6 py-10 border border-teal-300 rounded-lg bg-base-100 relative">
        <div className="flex justify-between px-10 py-6 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">About</h2>
          {user?.email === currentUser?.email && (
            <label
              for="about-modal"
              onClick={() => setModalOpen(true)}
              className="p-4 absolute top-10 right-10 text-teal-400 bg-base-100 rounded-full border border-teal-300"
            >
              <FaPencilAlt className="text-xl" />
            </label>
          )}
        </div>

        <p className="text-xl mb-6 px-10">
          {currentUser?.about
            ? currentUser?.about
            : "Please add about yourself"}
        </p>
      </section>
      <section className="mt-6 border border-teal-300 rounded-lg bg-base-100 relative">
        <div className="flex justify-between px-10 py-4 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">Posts</h2>
          {user?.email === currentUser?.email && (
            <div
              onClick={() => setIsWrite(!isWrite)}
              className="p-4 absolute top-10 right-10 text-teal-400 bg-base-100 rounded-full border border-teal-300"
            >
              {isWrite ? (
                <FaMinus className="text-xl" />
              ) : (
                <FaPlus className="text-xl" />
              )}
            </div>
          )}
        </div>
        {isWrite && (
          <div className="p-10">
            <WritePost />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 p-10">
          <Post />
          <Post />
        </div>
      </section>
      <AboutModals
        currentUser={currentUser}
        refetch={refetch}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <DetailsModal
        currentUser={currentUser}
        refetch={refetch}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <CoverModal />
    </section>
  );
};

export default UserFeed;
