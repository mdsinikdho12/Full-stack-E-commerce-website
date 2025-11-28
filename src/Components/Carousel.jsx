"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

export default function MyCarousel() {
  return (
    <Carousel slideInterval={2000} className="rounded-xl h-[610px]">
      <div className="relative w-full h-[610px]">
        <Image
          src="/images/image.png"
          alt="Slide 1"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="relative w-full h-[610px]">
        <Image
          src="/images/hero-2.png"
          alt="Slide 2"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="relative w-full h-[610px]">
        <Image
          src="/images/hero-3.png"
          alt="Slide 3"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </Carousel>
  );
}
