import { useQuery } from "@tanstack/react-query";

const useLoggedUser = (email) => {
  const {
    data: loggedUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["loggedUser"],
    queryFn: () =>
      fetch(`https://harkrx-server.vercel.app/single-user?email=${email}`).then(
        (res) => res.json()
      ),
  });
  console.log(email, loggedUser);
  return { loggedUser, isLoading, refetch };
};

export default useLoggedUser;
