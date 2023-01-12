import React, { useContext, useState } from "react";
import { AuthContext } from "../UserContext";
import Post from "./Post";

const OtherUser = ({ feedUsers }) => {
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
              <h2 className="text-5xl font-bold">{feedUsers.name}</h2>
              <p className="text-xl mt-3">Lorem ipsum dolor sit amet.</p>
              <p className="text-lg my-5">Lorem ipsum dolor sit amet.</p>
              <div className="flex gap-4 "></div>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          ratione dolorem sequi est accusamus voluptatum hic? Inventore sapiente
          totam molestias dolore, amet tempora a possimus recusandae ab,
          suscipit veritatis quod?
        </p>
      </section>
      <section className="mt-6 border border-teal-300 rounded-lg bg-base-100 relative">
        <div className="flex justify-between px-10 py-4 w-full items-center mt-6">
          <h2 className="text-3xl font-medium">Posts</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 p-10"></div>
      </section>
    </section>
  );
};

export default OtherUser;
