import React from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";
import WritePost from "./WritePost";

const RecentPosts = () => {
  const { posts, refetch } = usePosts();

  return (
    <section>
      <WritePost refetch={refetch} />
      {posts?.map((post) => (
        <Post key={post._id} post={post} refetch={refetch} />
      ))}
    </section>
  );
};

export default RecentPosts;
