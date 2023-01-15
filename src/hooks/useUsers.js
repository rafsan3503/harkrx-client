import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://harkrx-server.vercel.app/users").then((res) => res.json()),
  });

  return { users, isLoading, refetch };
};

export default useUsers;
