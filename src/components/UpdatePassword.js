import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
  const { newPassword, logOut } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (confirm !== password) {
      return Swal.fire("Error!", "Password does not match.", "error");
    }
    newPassword(password)
      .then(() => {
        Swal.fire("Success!", "password updated successfully", "success");
        logOut();
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };
  return (
    <div className="md:w-1/3 mx-auto">
      <h2 className="text-3xl font-bold my-6">Update your password</h2>
      <form onSubmit={handleUpdatePassword} className="space-y-6">
        <div className="space-y-1 text-sm relative">
          <label for="username" className="block dark:text-gray-400">
            New Password
          </label>
          <input
            type={showPassword ? "password" : "text"}
            name="password"
            required
            placeholder="Type your new password"
            className="w-full px-4 py-3 rounded-md "
          />
          <div
            className="absolute right-4 top-8 text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label for="confirm" className="block">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm"
            required
            placeholder="Confirm your password"
            className="w-full px-4 py-3 rounded-md"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
