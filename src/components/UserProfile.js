import React from "react";
import {
  FaNewspaper,
  FaIdBadge,
  FaAirbnb,
  FaLayerGroup,
  FaUser,
} from "react-icons/fa";

const UserProfile = () => {
  return (
    <div>
      <div className="border border-green-400 rounded-lg bg-white overflow-hidden">
        <div>
          <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box sticky top-0">
            <li className="sticky">
              <a>
                <FaNewspaper className="text-3xl text-green-400" /> Newsfeed
              </a>
            </li>
            <li>
              <a>
                <FaIdBadge className="text-3xl text-green-400" /> Badges
              </a>
            </li>
            <li>
              <a>
                <FaAirbnb className="text-3xl text-green-400" /> Stories
              </a>
            </li>
            <li>
              <a>
                <FaLayerGroup className="text-3xl text-green-400" /> Groups
              </a>
            </li>
            <li>
              <a>
                <FaUser className="text-3xl text-green-400" /> User
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg bg-white overflow-hidden mt-4 ">
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box sticky top-0">
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

export default UserProfile;
