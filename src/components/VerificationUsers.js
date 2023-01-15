import React from "react";
import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";

const VerificationUsers = () => {
  const { users, refetch } = useUsers();
  const verifiedUsers = users?.filter((user) => user.verificationStatus);

  const handleVerify = (id) => {
    fetch(`https://harkrx-server.vercel.app/verify-user/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Send!",
            text: "Verified successfully!",
            icon: "success",
          });
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Verification Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {verifiedUsers?.map((verifiedUser) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={verifiedUser?.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{verifiedUser?.name}</div>
                    <div className="text-sm opacity-50">
                      {verifiedUser?.address}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {verifiedUser?.address
                  ? verifiedUser?.address
                  : "No address found"}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {verifiedUser?.email}
                </span>
              </td>
              <td>{verifiedUser?.verificationStatus}</td>
              <th>
                {verifiedUser?.verificationStatus === "pending" ? (
                  <button
                    onClick={() => handleVerify(verifiedUser?._id)}
                    className="btn btn-primary btn-sm"
                  >
                    Verify
                  </button>
                ) : (
                  <button className="btn btn-success btn-sm">Verified</button>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerificationUsers;
