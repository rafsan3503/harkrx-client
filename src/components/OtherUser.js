import React, { useContext, useState } from "react";
import { AuthContext } from "../UserContext";
import Post from "./Post";
import logo from "../assets/Hark.png";
import usePosts from "../hooks/usePosts";
import { MdVerified } from "react-icons/md";
import useLoggedUser from "../hooks/useLoggedUser";
import { FaCheck, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const OtherUser = ({ feedUsers }) => {
  const { user } = useContext(AuthContext);
  const { posts, refetch } = usePosts();
  const { loggedUser } = useLoggedUser(user?.email);

  const followedUser = loggedUser?.followedUser;

  const userPost = posts?.filter(post => post.authorId === feedUsers._id);


  const handleFollow = (user) => {
    fetch(`https://harkrx-server.vercel.app/follow-user/${loggedUser?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `You are following ${user.name}`,
            icon: "success",
          });
        }
      });
  };

  return (
    <section>
      <div className="border border-teal-300 rounded-xl bg-base-100">
        <div className="p-4 relative">
          <img
            src={feedUsers?.cover ? feedUsers?.cover : logo}
            alt=""
            className="h-80 rounded-xl w-full object-cover"
          />
        </div>

        <div className="-mt-32">
          <div className="avatar pl-14">
            <div className="w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src={feedUsers.img} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-14 pt-6 mb-8 relative">
          <div className="flex gap-6 ">
            <div>
              <h2 className="text-5xl font-bold flex gap-2 items-center">
                {feedUsers?.name}{" "}
                {feedUsers?.verificationStatus === "verified" && (
                  <MdVerified className="text-blue-500 text-3xl font-blue" />
                )}
              </h2>
              <p className="text-xl mt-3">{feedUsers.headline}</p>
              <p className="text-lg my-5">{feedUsers.address}</p>
              <div className="flex gap-4 ">
                {followedUser?.find((usr) => usr.email === user?.email) ? (
                  <button className="btn btn-outline btn-disabled rounded-full text-teal-400 flex gap-2 items-center mt-4">
                    <FaCheck /> Followed
                  </button>
                ) : (
                  <button
                    onClick={() => handleFollow(feedUsers)}
                    className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4"
                  >
                    <FaPlus /> Follow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <section className="mt-6 py-10 border border-teal-300 rounded-lg bg-base-100 relative">
        <div className="flex justify-between px-10 py-6 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">About</h2>
        </div>

        <p className="text-xl mb-6 px-10">
          {feedUsers.about ? feedUsers.about : "User haven't added"}
        </p>
      </section>
      <section className="mt-6 border border-teal-300 rounded-lg bg-base-100 relative">
        <div className="flex justify-between px-10 py-4 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">Posts</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-10">
          {
            userPost?.map(post => <Post post={post} refetch={refetch}></Post>)
          }
        </div>
      </section>
    </section>
  );
};

export default OtherUser;
