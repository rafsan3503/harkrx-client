import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaInfo, FaPlus, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext";



const Feed = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data)
      });
  }, [user?.email]);

  // console.log(users);
  const userList = users?.filter(usr => usr.email !== user.email);
  console.log(userList);

  // const { loggedUser } = useContext(AuthContext);



  return (
    <div className="card bg-base-100 border border-teal-300 shadow-xl ">
      <div>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            Add to your feed <FaInfo />
          </h2>
          {userList.map((user) => (
            <Link
              to={`/user/${user._id}`}
              key={user._id}
              className="my-2 flex gap-4 items-start"
            >
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img src={user.img} alt="" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium">{user.name}</h2>
                <small>
                  Managing Director of Noman Group of Industries & Talha Group |
                  CIP |
                </small>
                <button className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4">
                  <FaPlus /> Follow
                </button>
              </div>
            </Link>
          ))}

          <p className="flex gap-4 text-lg items-center ">
            View all <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
