import React from "react";
import Contacts from "../components/Contacts";

import UserFeed from "../components/UserFeed";
import Navbar from "./shared/Navbar";

const User = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
        <div className="w-[75%]">
          <UserFeed />
        </div>
        <div className="w-[25%]">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default User;
