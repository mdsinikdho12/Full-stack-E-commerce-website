"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// React Quill কে dynamic import করতে হবে Next.js এর জন্য
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
    };

    console.log("Product Submitted:", productData);

    // এখানে তুমি API call করতে পারো backend এ save করার জন্য
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Product title"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Product description"
          />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Product price"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Product category"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Stock quantity"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
