import React, { useContext } from "react";
import Contacts from "../components/Contacts";
import UserFeed from "../components/UserFeed";
import { AuthContext } from "../UserContext";
import Navbar from "./shared/Navbar";

const User = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6 min-h-screen flex gap-6 ">
        <div className="w-[75%]">
          <UserFeed loggedUser={loggedUser} />
        </div>
        <div className="w-[25%]">
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default User;
