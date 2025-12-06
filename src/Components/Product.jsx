import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

function Product({ ProductName, price, image, id }) {
  return (
    <Link href={`/product/${id}`}>
      <div className="w-[400px] p-5 h-[420px] rounded-2xl bg-[#eaeff0] relative flex flex-col items-center ">
        <Heart className="absolute top-4 right-4 w-8 h-8 text-red-500 cursor-pointer" />

        <Image
          src={image}
          width={250}
          height={250}
          alt={ProductName}
          className="object-contain cursor-pointer hover:scale-110 transition-transform"
        />

        <p className="font-medium text-center text-2xl mt-2">{ProductName}</p>

        <div className="w-full mt-4 flex justify-around items-center  px-5">
          <p className="text-lg font-semibold">${price}</p>
          <ShoppingCart className="w-8 h-8 text-purple-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default Product;
