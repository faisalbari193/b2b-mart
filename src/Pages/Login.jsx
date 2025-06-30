import React from "react";
import Lottie from "lottie-react";
import logIn from "../assets/lotte-json/login.json";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
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
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gray-50 px-4 py-12">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 max-w-md bg-white p-8 shadow-lg rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <SocialLogin from={from} />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>

      {/* Animation Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <Lottie
          animationData={logIn}
          loop={true}
          className="w-full max-w-[500px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Login;
