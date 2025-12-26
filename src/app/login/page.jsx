"use client";

import React, { useState } from "react";
import GoogleProvider from "@/Components/GoogleProvider";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result.ok) {
        setError(result.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        <h1 className="text-center text-3xl font-bold text-purple-500">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Login with your Email or Google account
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-purple-500 font-medium text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
              className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-purple-500 font-medium text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
              className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>
          {error && (
            <div className="mt-4 text-center bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-purple-500 text-white font-medium py-2 rounded-lg hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="flex items-center gap-2 my-4 text-gray-400 text-sm">
            <hr className="flex-1" />
            <span>Or continue with</span>
            <hr className="flex-1" />
          </div>

          <GoogleProvider />
        </div>

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
