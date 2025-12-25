"use client";
import React, { useState } from "react";
import { createUser } from "@/action/user.action";

function RegistationFrom() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData(e.target);

      const response = await createUser(formData);

      if (response?.success) {
        setSuccess("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে 🎉");
        e.target.reset();
      } else {
        setError(response?.message || "আবার চেষ্টা করুন");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("সার্ভার সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
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
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
          <p className="text-sm">{success}</p>
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-all">
        {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
      </button>
    </form>
  );
}

export default RegistationFrom;
