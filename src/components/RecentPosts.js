import React from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";
import WritePost from "./WritePost";

const RecentPosts = () => {
  const { posts, isLoading, refetch } = usePosts();

  return (
    <section>
      <WritePost refetch={refetch} />
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
};

export default RecentPosts;
