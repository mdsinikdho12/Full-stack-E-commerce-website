import Image from "next/image";
import Link from "next/link";
import Cartbutton from "./Cartbutton";

function AvaterSection() {
  return (
    <div className="flex items-center gap-2">
      <Cartbutton />
      <div className="bg-white mr-2 w-[180px] flex items-center justify-between h-[55px] px-2 rounded-full">
        <p className="font-semibold font-sans truncate">Md. Sinikdo</p>

        <Link href="/Avater">
          <Image
            src="/images/Avatar.png"
            width={60}
            height={60}
            alt="Avatar"
            className="rounded-full ml-5 mt-2 object-cover"
          />
        </Link>
      </div>{" "}
    </div>
  );
}

export default AvaterSection;
