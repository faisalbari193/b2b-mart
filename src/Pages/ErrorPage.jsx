import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 px-4"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-orange-600 mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2"
      >
        Oops! Page not found.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-600 mb-6 text-center max-w-md"
      >
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          🔙 Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
