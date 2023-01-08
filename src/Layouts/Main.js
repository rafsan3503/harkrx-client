import React from "react";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import RecentPosts from "../components/RecentPosts";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
        <div className="w-[20%] ">
          <Profile />
        </div>
        <div className="w-[55%]">
          <RecentPosts />
        </div>
        <div className="w-[25%]">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Main;
