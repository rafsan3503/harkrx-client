import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/login.gif";
import { AuthContext } from "../../UserContext";
import AuthNavbar from "./AuthNavbar";

const Login = () => {
  const { googleLogin, facebookLogin, loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // email log in
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("Success", `Welcome to Harkrx `, "success");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Opps", err.message, "error");
        setLoading(false);
      });
  };
  const handleGoogle = (e) => {
    setLoading(true);
    e.preventDefault();
    googleLogin()
      .then((res) => {
        Swal.fire("Success", "Google Log In", "success");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Opps", err.message, "error");
        setLoading(false);
      });
  };

  const handleFacebook = () => {
    setLoading(true);
    facebookLogin()
      .then((res) => {
        Swal.fire("Success", "Facebook Log In", "success");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Opps", err.message, "error");
        setLoading(false);
      });
  };

  // setPass
  const handlePassword = (e) => {
    const pass = e.target.value;
    if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      return setError("Please provide at least two uppercase");
    }
    if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
      return setError("Password Must have at least 2 numbers");
    }
    if (!/(?=.*[!@#$&*])/.test(pass)) {
      return setError("Please provide at least one special character");
    }
    if (pass.length < 8) {
      return setError("Please provide at least 8 character");
    }

    setError("");
    setPassword(pass);
  };
  return (
    <section>
      <AuthNavbar />
      <section className="flex min-h-screen">
        <aside className="w-[45%]">
          <img src={login} alt="" className="h-full w-full" />
        </aside>
        <div className="w-[55%] flex justify-center items-center">
          <div className="bg-white w-1/2 mx-auto py-6 sm:py-8 lg:py-12">
            <div className="w-full px-4 md:px-8 mx-auto">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
                Join Now
              </h2>

              <form
                onSubmit={handleSubmit}
                className="w-full border rounded-lg mx-auto"
              >
                <div className="flex flex-col gap-4 p-4 md:p-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Password
                    </label>
                    <input
                      onChange={handlePassword}
                      required
                      name="password"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                    {error && (
                      <small className="text-red-400 my-2">{error}</small>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex gap-2 justify-center bg-success hover:bg-green-400 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    {loading ? (
                      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
                    ) : (
                      "Login"
                    )}
                  </button>

                  <div className="flex justify-center items-center relative">
                    <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                    <span className="bg-white text-gray-400 text-sm relative px-4">
                      Log in with social
                    </span>
                  </div>

                  <button
                    onClick={handleFacebook}
                    className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                  >
                    {loading ? (
                      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 shrink-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z"
                            fill="white"
                          />
                        </svg>
                        Continue with Facebook
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleGoogle}
                    className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                  >
                    {loading ? (
                      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-green-400"></div>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 shrink-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                            fill="#EA4335"
                          />
                        </svg>
                        Continue with Google
                      </>
                    )}
                  </button>
                </div>

                <div className="flex justify-center items-center bg-gray-100 p-4">
                  <p className="text-gray-500 text-sm text-center">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
