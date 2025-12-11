"use client";
import { useState } from "react";
import { Loader } from "lucide-react";
function CategoryForm() {
  const [uploading, setUploading] = useState(false);
  return (
    <form action="">
      <div className="mb-6 mt-10">
        <label className="block text-purple-400 font-medium text-sm">
          Catagory Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Catagory Name.."
          required
          className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
      </div>

      <div className="relative">
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="image-input"
        />
        <label
          htmlFor="image-input"
          className="w-full border-2 border-dashed border-purple-400 rounded-xl p-8 text-center cursor-pointer hover:border-purple-600 hover:bg-purple-50 transition bg-white block">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              {uploading ? (
                <Loader className="w-8 h-8 text-purple-500 animate-spin" />
              ) : (
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
            <p className="text-purple-600 font-semibold text-lg">
              {uploading ? "Processing..." : "Upload Product Images"}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Click to browse or drag and drop
            </p>
          </div>
        </label>
      </div>
    </form>
  );
}

export default CategoryForm;
