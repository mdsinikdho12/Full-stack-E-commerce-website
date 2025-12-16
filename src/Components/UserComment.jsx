import React from "react";
import { Star } from "lucide-react";

function UserComment({ product }) {
  return (
    <div className="space-y-4 ">
      <div className="space-y-4">
        {product.reviews.map((review, idx) => (
          <div
            key={idx}
            className=" rounded p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-end mb-2">
              <span className="text-xs bg-purple-100 text-purple-500 px-2 py-1 rounded font-semibold">
                {review.rating}.0
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-purple-400 text-purple-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 font-hind text-xl leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserComment;
