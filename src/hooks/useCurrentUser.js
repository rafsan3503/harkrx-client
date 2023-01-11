import { useQuery } from "@tanstack/react-query";

const useCurrentUser = (email) => {
  const {
    data: currentUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () =>
      fetch(`https://harkrx-server.vercel.app/single-user?email=${email}`).then(
        (res) => res.json()
      ),
  });

  return { currentUser, isLoading, refetch };
};

export default useCurrentUser;
