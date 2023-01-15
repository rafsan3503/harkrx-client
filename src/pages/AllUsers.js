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
      <div className="container mx-auto py-6 min-h-screen flex flex-col md:flex-row gap-6 ">
        <div className="w-full md:w-[25%] md:sticky md:top-0">
          <Profile />
        </div>
        <div className="w-full md:w-[75%]">
          <AllUsersList allUsers={allUsers} />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
