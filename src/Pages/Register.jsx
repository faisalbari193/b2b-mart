import React from "react";
import Lottie from "lottie-react";
import registerLottie from "../assets/lotte-json/register.json";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = React.useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!upperCase || !lowerCase || !minLength) {
      toast.error(
        "Password must be at least 6 characters and contain uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch(() => {
            toast.error("Profile update failed");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-12 bg-gray-100">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* Animation Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Lottie
          animationData={registerLottie}
          loop={true}
          className="w-full max-w-[500px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Register;
