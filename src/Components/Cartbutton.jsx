import Link from "next/link";
import { ShoppingBasket, Heart } from "lucide-react";

function Cartbutton() {
  return (
    <div className="flex items-center gap-2">
      <Link
        className="w-[50] h-[50] bg-white rounded-full flex justify-center items-center cursor-pointer"
        href="/Cart">
        <ShoppingBasket />
      </Link>
      <Link
        className="w-[50] h-[50] bg-white rounded-full flex justify-center items-center cursor-pointer"
        href="/Cart">
        <Heart color="red" />
      </Link>
    </div>
  );
}

export default Cartbutton;
