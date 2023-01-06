import React from "react";
import Post from "./Post";
import WritePost from "./WritePost";

const RecentPosts = () => {
  return (
    <section>
      <WritePost />
      <Post />
    </section>
  );
};

export default RecentPosts;
