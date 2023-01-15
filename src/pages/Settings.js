import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { MdFlag, MdPrivacyTip } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import Navbar from "./shared/Navbar";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../UserContext";

const Settings = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    const [isAdmin] = useAdmin(user?.email);
    // console.log(isAdmin);
    return (
        <div>
            <Navbar>
                <label
                    htmlFor="dashboard-drawer"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 lg:hidden"
                >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                    </svg>
                </label>
            </Navbar>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content p-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isAdmin && <li>
                                <Link to="/settings/verify-users">
                                    <BsPersonLinesFill /> Verify Users
                                </Link>
                            </li>
                        }

                        {
                            isAdmin && <li>
                                <Link to="/settings/report-posts">
                                    <MdFlag />
                                    Report posts
                                </Link>
                            </li>
                        }
                        <li>
                            <Link to="/settings/update-password">
                                <AiFillLock />
                                Sign in & Security
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Settings;
