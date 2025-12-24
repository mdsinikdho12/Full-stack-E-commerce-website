import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleCatagory({ category, image, id }) {
  return (
    <div className="">
      <Link href={`/category/${id}`}>
        <div className="w-[180px] h-[180px] rounded-full border-3 border-purple-500 overflow-hidden flex items-center justify-center bg-white">
          <Image
            src={image}
            width={150}
            height={150}
            alt={category}
            className="object-cover cursor-pointer hover:scale-110 transition-transform"
            title={category}
          />
        </div>
      </Link>
    </div>
  );
}

export default SingleCatagory;
