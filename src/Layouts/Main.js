import React from "react";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import RecentPosts from "../components/RecentPosts";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-[20%] ">
          <Profile />
        </div>
        <div className="w-full md:w-[55%]">
          <RecentPosts />
        </div>
        <div className="w-full md:w-[25%] md:sticky md:top-0">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Main;
