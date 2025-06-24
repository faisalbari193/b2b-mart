import React, { use } from "react";
import Lottie from "lottie-react";
import registerLottie from "../assets/lotte-json/register.json";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = use(AuthContext);
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
            navigate(from);
          })
          .catch((err) => {
            toast.error("Profile update failed");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <title>Register</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: "700px" }}
              animationData={registerLottie}
              loop={true}
            />
          </div>
          <div className="card bg-base-100 w-full shadow-lg max-w-md">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-center">Register</h1>
              <form onSubmit={handleRegister}>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Register
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link to="/login" className="hover:text-blue-600 underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
