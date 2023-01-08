import React, { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../UserContext";
import Post from "./Post";

const UserFeed = () => {
  const email = "rafsanchowdhuryrudro@gmail.co";
  const { user } = useContext(AuthContext);

  return (
    <section>
      <div className="border border-teal-300 rounded-xl bg-base-100">
        <div className="p-4 relative">
          <img
            src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="h-80 rounded-xl w-full object-cover"
          />
          {user.email === email && (
            <div className="p-4 absolute top-10 right-10 text-green-400 bg-white rounded-full border border-green-400">
              <FaPencilAlt className="text-xl" />
            </div>
          )}
        </div>

        <div className="-mt-32">
          <div className="avatar pl-14">
            <div className="w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-14 pt-6 mb-8">
          <div className="flex gap-6">
            <div>
              <h2 className="text-5xl font-bold">Emma Watson</h2>
              <p className="text-xl mt-3">
                Mern Stack Web Developer || React Js || Javascript || Mongo DB
                || Node Js
              </p>
              <p className="text-lg my-5">
                Albama, United States{" "}
                <Link className="text-blue-500 font-medium">
                  Contact Info..
                </Link>
              </p>
              <div className="flex gap-4">
                {user.email === email && (
                  <div className="p-4 absolute top-10 right-10 text-green-400 bg-white rounded-full border border-green-400">
                    <FaPencilAlt className="text-xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            {user.email === email && (
              <div className="p-4 absolute top-10 right-10 text-green-400 bg-white rounded-full border border-green-400">
                <FaPencilAlt className="text-xl" />
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="mt-6 border border-green-400 rounded-lg bg-white">
        <div className="flex justify-between px-10 py-4 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">About</h2>
          {user.email === email && (
            <div className="p-4 absolute top-10 right-10 text-green-400 bg-white rounded-full border border-green-400">
              <FaPencilAlt className="text-xl" />
            </div>
          )}
        </div>
        <p className="text-xl mb-6 px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui fuga
          commodi quaerat distinctio vel saepe eaque inventore odio consequatur?
        </p>
      </section>
      <section className="mt-6 border border-green-400 rounded-lg bg-white">
        <div className="flex justify-between px-10 py-4 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">Posts</h2>
          {user.email === email && (
            <div className="p-4 absolute top-10 right-10 text-green-400 bg-white rounded-full border border-green-400">
              <FaPencilAlt className="text-xl" />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 p-10">
          <Post />
          <Post />
        </div>
      </section>
    </section>
  );
};

export default UserFeed;
