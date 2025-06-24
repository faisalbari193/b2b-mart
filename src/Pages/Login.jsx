import React, { use } from "react";
import Lottie from "lottie-react";
import logIn from "../assets/lotte-json/login.json";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        // ✅ Show SweetAlert
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <>
      <title>Login</title>
      <div className="flex flex-col max-w-md mx-auto min-h-screen p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="text-center flex">
          <Lottie
            style={{ width: "700px" }}
            animationData={logIn}
            loop={true}
          />
        </div>
        <div className="mb-8 mt-20 text-center">
          <h1 className="my-3 text-4xl font-bold">Log-In</h1>
        </div>
        <form onSubmit={handleSignIn} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a href="#" className="text-xs hover:underline text-gray-600">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>
          <SocialLogin from={from} />
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white"
              >
                Login
              </button>
            </div>
            <p className="px-6 text-xl text-center text-amber-950">
              Don't have an account yet?{" "}
              <NavLink
                to="/register"
                className="hover:underline hover:text-blue-600"
              >
                Sign up
              </NavLink>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
