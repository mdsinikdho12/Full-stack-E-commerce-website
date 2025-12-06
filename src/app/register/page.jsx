// page.jsx
import React from "react";
import RegistationFrom from "@/Components/RegistationFrom";
import GoogleProvider from "@/Components/GoogleProvider";

function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md rounded-2xl bg-[#eaeff0] shadow-xl p-8">
        <h1 className="text-center font-medium text-2xl text-purple-500">
          Registration
        </h1>

        <RegistationFrom />

        <button
          type="submit"
          className="w-full mt-4 bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-all">
          Register
        </button>

        <div className="flex items-center gap-2 my-4 text-gray-400 text-sm">
          <hr className="flex-1" />
          <span>or</span>
          <hr className="flex-1" />
        </div>

        <GoogleProvider />

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-500 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
