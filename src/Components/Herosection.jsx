import MyCarousel from "./Carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
function Herosection() {
  return (
    <div className=" max-w-7xl mt-[60px] mx-auto grid  grid-cols-1 md:grid-cols-3 gap-4">
      <div className="max-w-7xl bg-[#ffff] col-span-2 mx-auto w-full  h-[610px] rounded-xl">
        <MyCarousel />
      </div>
      <div className="max-w-7xl flex flex-col gap-4  mx-auto w-full   ">
        <div className="bg-white h-[200px] rounded-xl relative p-4">
          <Image
            src="/images/Logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="absolute left-1 top-1 p-2"
          />

          <div className="mt-10 pl-[70px]    ">
            {/* 1st Row */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/delivery.png"
                width={60}
                height={60}
                alt="delivery"
              />
              <p className="text-gray-700 text-[17px] font-medium">
                Fastest delivery
              </p>
            </div>

            {/* 2nd Row */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/ticket.png"
                width={60}
                height={60}
                alt="ticket"
              />
              <p className="text-gray-700 text-[17px] font-medium">
                Discount offer
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white h-[400px] rounded-xl">
          <Image
            src="/images/smart.png"
            width={250}
            height={300}
            alt="product-images"
            className="mx-auto"
          />
          <p className="text-2xl font-semibold text-center text-gray-600">
            20% Discounts
          </p>
          <Link
            className="font-medium text-purple-400 flex items-center justify-center text-center"
            href="/Products">
            View All <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
