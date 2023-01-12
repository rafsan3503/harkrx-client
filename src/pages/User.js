import React, { useContext } from "react";

import Contacts from "../components/Contacts";
import UserFeed from "../components/UserFeed";
import useCurrentUser from "../hooks/useCurrentUser";
import { AuthContext } from "../UserContext";
import loadingImg from "../assets/loading (2).gif";

import Navbar from "./shared/Navbar";

const User = () => {
  const { user } = useContext(AuthContext);
  const { currentUser, refetch, isLoading } = useCurrentUser(user?.email);

  // const {
  //   data: profileUser,
  //   loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["profileUser"],
  //   queryFn: () =>
  //     fetch(`https://harkrx-server.vercel.app/user/${id}`).then((res) => {
  //       return res.json();
  //     }),
  // });
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-base-100">
        <img src={loadingImg} alt="" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
        <div className="w-[75%]">
          <UserFeed currentUser={currentUser} refetch={refetch} />
        </div>
        <div className="w-[25%] sticky">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default User;
