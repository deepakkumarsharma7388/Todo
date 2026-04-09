import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 to-black text-white px-4">
      
      {/* 404 Number */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl md:text-3xl mt-4 font-semibold">
        Page Not Found
      </p>

      {/* Subtext */}
      <p className="text-gray-400 mt-2 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default PageNotFound;