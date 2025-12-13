"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

function DiscriptionAndReviws({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="">
      <div className="flex gap-8 border-b mt-5 border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-4 px-1 font-semibold text-base transition-all duration-300 relative ${
            activeTab === "description"
              ? "text-purple-600"
              : "text-gray-600 hover:text-gray-900"
          }`}>
          Discription
          {activeTab === "description" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 px-1 font-semibold text-base transition-all duration-300 relative ${
            activeTab === "reviews"
              ? "text-purple-600"
              : "text-gray-600 hover:text-gray-900"
          }`}>
          reviews
          {activeTab === "reviews" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t"></div>
          )}
        </button>
      </div>

      {/* description tab data  */}
      {activeTab === "description" && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="space-y-4 ">
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div
                key={idx}
                className=" rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                    {review.rating}/5
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {review.comment}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  User: {review.user.substring(0, 10)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscriptionAndReviws;
