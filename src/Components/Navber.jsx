import Link from "next/link";
import Image from "next/image";
import Sherchbox from "./Sherchbox";
import AvaterSection from "./AvaterSection";

function Navber() {
  return (
    <nav className=" sticky top-4 z-[500] px-4">
      <div className="max-w-7xl flex items-center justify-between  bg-[#eaeff0]  mx-auto w-full  h-[70px] rounded-2xl">
        <Link href="/" className="flex items-center h-full ">
          <Image
            src="/images/Logo.png"
            width={50}
            height={50}
            alt="HomeMart Logo"
            className="ml-1 p-2"
            priority
          />
          <span className="font-semibold text-lg">HomeMart.</span>
        </Link>

        <Sherchbox />

        <AvaterSection />
      </div>
    </nav>
  );
}

export default Navber;
// d2dbdd
