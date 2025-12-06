"use client";
import React from "react";
import { signIn } from "next-auth/react";

function GoogleProvider() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-2 mb-4 hover:shadow-sm transition"
      aria-label="Sign in with Google">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 533.5 544.3"
        className="w-5 h-5">
        <path
          fill="#4285f4"
          d="M533.5 278.4c0-18.5-1.5-36.3-4.3-53.6H272v101.5h147c-6.4 34.6-26 64-55.5 83.6v69.3h89.5c52.4-48.3 82.5-119.6 82.5-200.8z"
        />
        <path
          fill="#34a853"
          d="M272 544.3c73.5 0 135.3-24.4 180.4-66.3l-89.5-69.3c-24.9 16.7-56.8 26.6-90.9 26.6-69.8 0-129-47.1-150.2-110.3H31.6v69.2C76.7 486.9 168.6 544.3 272 544.3z"
        />
        <path
          fill="#fbbc04"
          d="M121.8 322.9c-10.8-32.2-10.8-66.9 0-99.1V154.6H31.6c-39.6 78.9-39.6 171.8 0 250.7l90.2-69.2z"
        />
        <path
          fill="#ea4335"
          d="M272 107.7c37.2-.6 72.5 13.4 99.6 38.5l74.8-74.8C405.8 24.7 343.9.5 272 0 168.6 0 76.7 57.4 31.6 154.6l90.2 69.2C143 154.8 202.2 107.7 272 107.7z"
        />
      </svg>
      <span className="text-sm">Continue with Google</span>
    </button>
  );
}

export default GoogleProvider;
