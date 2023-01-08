import React from "react";
import { FaArrowRight, FaEye, FaInfo } from "react-icons/fa";
import Feed from "./Feed";

const Contacts = () => {
  return (
    <div className="sticky top-0">
      <div className="card mb-10 bg-base-100 border border-teal-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            Following <FaInfo />
          </h2>
          <div className="my-2 flex gap-4 items-start">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span className="text-3xl">K</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium">Diana</h2>
              <small>
                Managing Director of Noman Group of Industries & Talha Group |
                CIP |
              </small>
              <button className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4">
                <FaEye /> View Profile
              </button>
            </div>
          </div>
          <div className="my-2 flex gap-4 items-start">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span className="text-3xl">K</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium">John Doe</h2>
              <small>
                Managing Director of Noman Group of Industries & Talha Group |
                CIP |
              </small>
              <button className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4">
                <FaEye /> View Profile
              </button>
            </div>
          </div>
          <div className="my-2 flex gap-4 items-start">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span className="text-3xl ">K</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium">Nicholas</h2>
              <small>
                Managing Director of Noman Group of Industries & Talha Group |
                CIP |
              </small>
              <button className="btn btn-outline rounded-full text-teal-400 flex gap-2 items-center mt-4">
                <FaEye /> View Profile
              </button>
            </div>
          </div>
          <p className="flex gap-4 text-lg items-center ">
            View all <FaArrowRight />
          </p>
        </div>
      </div>

      <Feed />
    </div>
  );
};

export default Contacts;
