import React, { useContext, useState, useRef, useEffect } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    // signOut functionality would go here
    setShowLogout(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const Links = (
    <>
      <li className="mx-2">
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>
      </li>
      <li className="mx-2">
        <Link className="text-2xl font-bold" to="/all-categories">
          Categories
        </Link>
      </li>
      <li className="mx-2">
        <Link to="/add-products" className="text-2xl font-bold">
          Add Products
        </Link>
      </li>
      <li className="mx-2">
        <Link to="/products" className="text-2xl font-bold">
          All Products
        </Link>
      </li>
      <li className="mx-2">
        <Link className="text-2xl font-bold" to="/my-products">
          My Products
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 bg-gradient-to-r from-white via-yellow-200 to-white bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost flex items-center gap-2 text-2xl font-bold">
            B2B <TfiShoppingCartFull size={24} /> Mart
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end space-x-2 relative">
          <div className="navbar-end">
            <Link className="btn" to="/my-cart">
              <FaCartPlus size={16} />
              Cart
            </Link>
          </div>
          {!user?.uid ? (
            <>
              {/* <Link to="/register" className="btn">
                Register
              </Link> */}
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          ) : (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setShowLogout((prev) => !prev)}
                className="flex items-center gap-2"
              >
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                  title={user.displayName || "User"}
                />
              </button>
              {showLogout && (
                <div className="absolute top-12 right-0 bg-white border rounded shadow-md px-4 py-2 z-50">
                  <p className="mb-2 font-semibold">{user.displayName}</p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Marquee
        pauseOnHover
        gradient={false}
        speed={60}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-t-lg shadow-md"
      >
        🎉 Flash Sale: Up to 70% OFF | 🚛 Free Shipping on orders over $100 | 🔥
        Hot Deal: Buy 1 Get 1 Free on Summer Essentials | 🎁 Exclusive Offers
        for B2B Clients | ⏰ Hurry! Limited Time Offer!
      </Marquee>
    </>
  );
};
export default Navbar;
