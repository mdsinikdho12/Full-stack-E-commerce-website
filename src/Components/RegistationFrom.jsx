// RegistationFrom.jsx
import React from "react";

function RegistationFrom() {
  return (
    <form action="" className="flex flex-col gap-3 mt-4">
      <div>
        <label className="block text-purple-500 font-medium text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name .."
          className="w-full border-0 text-gray-500 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="block text-purple-500 font-medium text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email .."
          className="w-full border-0  text-gray-500  rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="block text-purple-500 font-medium text-sm mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password .."
          className="w-full border-0 text-gray-500 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="block text-purple-500 font-medium text-sm mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Your Confirm Password .."
          className="w-full border-0 text-gray-500 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>
    </form>
  );
}

export default RegistationFrom;
