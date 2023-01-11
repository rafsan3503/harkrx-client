import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import AllUsersList from "../components/AllUsersList";
import Profile from "../components/Profile";

import { AuthContext } from "../UserContext";
import Navbar from "./shared/Navbar";

const AllUsers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: allUsers,
    loading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch(`https://harkrx-server.vercel.app/users?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
        <div className="w-[25%] sticky top-0">
          <Profile />
        </div>
        <div className="w-[75%]">
          <AllUsersList allUsers={allUsers} />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
