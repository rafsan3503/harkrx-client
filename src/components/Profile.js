import React, { useContext } from "react";
import useLoggedUser from "../hooks/useLoggedUser";
import { AuthContext } from "../UserContext";
import logo from "../assets/Hark.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const { loggedUser } = useLoggedUser(user?.email);
  // const [loggedUser, setLoggedUser] = useState({});

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`https://harkrx-server.vercel.app/single-user?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoggedUser(data);
  //       });
  //   }
  // }, [user?.email]);

  return (
    <div className="sticky top-0">
      <div className="border border-teal-300 rounded-lg bg-base-100 overflow-hidden">
        <img
          src={loggedUser?.cover ? loggedUser?.cover : logo}
          alt=""
          className="h-28 object-cover w-full"
        />
        <div className="avatar -mt-12 flex justify-center">
          <div className="w-24 rounded-full">
            <img src={loggedUser?.img} alt="" />
          </div>
        </div>
        <div className="my-6 text-center">
          <h2 className="text-xl font-medium">{loggedUser?.name}</h2>
          <p className="mt-2">{loggedUser?.headline}</p>
        </div>
        <hr />
        <div>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Following <span>30</span>
          </button>
          <button className="btn btn-ghost flex justify-between w-full">
            Total Posts <span>30</span>
          </button>
        </div>
      </div>
      <div className="border border-teal-300 rounded-lg overflow-hidden mt-4 ">
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box ">
          <li>
            <a>Groups</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Followers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
