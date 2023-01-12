import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonLinesFill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { MdPrivacyTip } from 'react-icons/md';
import { AiFillDatabase } from 'react-icons/ai';
import Navbar from './shared/Navbar';

const Settings = () => {
    return (
        <div>
            <Navbar>
                <label htmlFor="dashboard-drawer"
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
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* 
                    ------------
                    ------------
                    ------------
                    drawer content here 
                    ------------
                    ------------
                    ------------
                    */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to=''><BsPersonLinesFill /> Preferences</Link></li>
                        <li><Link to=''><AiFillLock />Sign in & Security</Link></li>
                        <li><Link to=''><AiFillEye />Visibilty</Link></li>
                        <li><Link to=''><GrMail />Communications</Link></li>
                        <li><Link to=''><MdPrivacyTip />Data Privacy</Link></li>
                        <li><Link to=''><AiFillDatabase />Advertising Data</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Settings;