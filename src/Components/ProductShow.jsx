"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductShow({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex gap-6 p-8 ">
      <div className="flex flex-col gap-3">
        {product.images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-20 h-28 border-2 rounded-lg cursor-pointer transition-all relative ${
              selectedIndex === index
                ? "border-purple-600 bg-purple-100"
                : "border-gray-300 hover:border-purple-400"
            }`}>
            <Image
              src={img}
              alt={`${product.title} ${index + 1}`}
              fill
              className="object-cover p-1 rounded"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center   rounded-lg p-6 bg-white w-80 h-96 relative">
        <Image
          src={product.images[selectedIndex]}
          alt={product.title}
          fill
          className="object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
