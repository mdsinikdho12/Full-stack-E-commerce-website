import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Mac Window Header */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-100 px-6 py-4 flex items-center gap-3 border-b border-gray-300">
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer transition"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer transition"></div>
          </div>
          <div className="flex-1 text-center">
            <p className="text-sm font-semibold text-gray-700">
              404 - Page Not Found
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white px-8 py-16 flex flex-col items-center justify-center min-h-96">
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">
            404
          </h1>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 text-center mb-12 max-w-xl">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Home Link Button */}
          <Link
            href="/"
            className="flex gap-2 items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Home size={20} />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
