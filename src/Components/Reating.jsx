import { Star } from "lucide-react";

export default function Rating({ value, count }) {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: totalStars }).map((_, index) => {
          const filled = index < value;
          return (
            <Star
              key={index}
              size={20}
              className={
                filled ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
              }
            />
          );
        })}
      </div>

      <span className="text-gray-600">{count} Reviews</span>
    </div>
  );
}
