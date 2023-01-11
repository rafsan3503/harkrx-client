import { useEffect, useState } from "react";

const useLoggedUser = (email) => {
  const [loggedUser, setLoggedUser] = useState({});

  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://harkrx-server.vercel.app/single-user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setLoggedUser(data);
          setUserLoading(false);
        });
    }
  }, [email]);

  return [loggedUser, userLoading];
};

export default useLoggedUser;
