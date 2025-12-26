import Link from "next/link";
import { ShoppingBasket, Heart } from "lucide-react";

function Cartbutton() {
  return (
    <div className="flex   items-center gap-4 relative">
      {/* Cart Button */}
      <Link
        className="w-[50px]  h-[50px] shadow-md  bg-white rounded-full flex justify-center items-center cursor-pointer relative"
        href="/Cart">
        <ShoppingBasket className="text-black" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </Link>

      {/* Heart Button */}
      <Link
        className="w-[50px]  h-[50px] shadow-md bg-white rounded-full flex justify-center items-center cursor-pointer"
        href="/Wishlist">
        <Heart color="red" fill="red" />
      </Link>
    </div>
  );
}

export default Cartbutton;
