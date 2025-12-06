"use client";
import React, { useState } from "react";
import JoditEditor from "jodit-react";
import HeadingText from "@/Components/HeadindText";
import { addProduct } from "@/action/products.action";
import { X } from "lucide-react";

function Page() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            src: reader.result,
            name: file.name,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description });
  };
  const categories = [
    { id: 1, name: "Electronics", icon: "📱" },
    { id: 2, name: "Fashion", icon: "👗" },
    { id: 3, name: "Home & Garden", icon: "🏠" },
    { id: 4, name: "Sports", icon: "⚽" },
    { id: 5, name: "Books", icon: "📚" },
    { id: 6, name: "Food & Beverages", icon: "🍔" },
    { id: 7, name: "Beauty & Personal Care", icon: "💄" },
    { id: 8, name: "Toys & Games", icon: "🎮" },
  ];
  return (
    <div className="max-w-7xl flex items-center p-6 mt-30 justify-between  bg-[#eaeff0]  mx-auto w-full   rounded  ">
      <div className="w-full   ">
        <form>
          <HeadingText headingfast="Add" headinglast="Product" marginTop="0" />

          <div className="mb-6 mt-10">
            <label className="block text-purple-400 font-medium text-sm ">
              Product title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your product title"
              required
              className="w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-purple-500 font-medium text-mb mb-3">
              Product Images
            </label>

            {/* Upload Area */}
            <div className="relative">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-input"
              />
              <label htmlFor="image-input" className="w-full ">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
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
                  </div>
                  <p className="text-purple-600 font-semibold text-lg">
                    Upload Product Images
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Click to browse or drag and drop
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    PNG, JPG, GIF up to 5MB each
                  </p>
                </div>
              </label>
            </div>

            {/* Image Preview Grid */}
            {images.length > 0 && (
              <div className="mt-6">
                <p className="text-gray-700 font-medium mb-3">
                  {images.length} image{images.length !== 1 ? "s" : ""} selected
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className="relative group rounded-lg overflow-hidden border border-gray-200 hover:border-purple-400 transition">
                      <img
                        src={image.src}
                        alt={image.name}
                        className="w-full h-40 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                        <X size={16} />
                      </button>
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 truncate">
                        {image.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Info Message */}
            {images.length === 0 && (
              <p className="text-gray-500 text-sm mt-2">
                No images selected yet
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-purple-500 font-medium text-sm mb-1">
              Description
            </label>
            <JoditEditor
              value={description}
              onBlur={(newContent) => setDescription(newContent)}
              config={{
                height: 400,
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "link",
                  "ul",
                  "ol",
                  "hr",
                  "eraser",
                  "fullsize",
                ],
              }}
            />
          </div>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-500 font-medium text-sm mb-2">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                  $
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                  className=" pl-8 pr-4 py-2 border border-gray-300 text-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-500 font-medium text-sm mb-2">
                Stock
              </label>
              <input
                type="number"
                placeholder="0"
                min="0"
                required
                className=" px-4 py-2 border border-gray-300 text-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-purple-500 font-medium text-sm mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className=" border-2 border-gray-300 text-gray-700 rounded-lg px-4 py-3 outline-none  transition bg-white cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}>
              <option value="">-- Select a category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          {category && (
            <div className="mb-6 p-4 w-60 bg-purple-200 border border-purple-200 rounded-lg">
              <p className="text-purple-700 font-medium">
                Selected: {category}
              </p>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className=" bg-purple-500 text-white font-semibold py-2 p-3 rounded-lg hover:bg-purple-600 transition">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
