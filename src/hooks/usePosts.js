import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://harkrx-server.vercel.app/posts").then((res) => res.json()),
  });

  return { posts, isLoading, refetch };
};

export default usePosts;
