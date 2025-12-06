import React from "react";
import GoogleProvider from "@/Components/GoogleProvider";

function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        <h1 className="text-center  text-3xl text-purple-500">Welcome Back</h1>
        <p className="text-gray-500 text-center mt-2">
          Login with your Email or Google account
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-purple-500 font-medium text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-purple-500 font-medium text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-medium py-2 rounded-lg hover:bg-purple-600 transition-all">
            Login
          </button>

          <div className="flex items-center gap-2 my-4 text-gray-400 text-sm">
            <hr className="flex-1" />
            <span>Or continue with</span>
            <hr className="flex-1" />
          </div>

          <GoogleProvider />
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-purple-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
