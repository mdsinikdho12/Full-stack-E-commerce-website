"use client";
import Image from "next/image";
import Link from "next/link";
import Cartbutton from "./Cartbutton";
import { signOut, useSession, signIn } from "next-auth/react";

function AvaterSection() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-3">
      <Cartbutton />

      {session?.user ? (
        <div className="bg-white shadow-md mr-2 w-fit flex items-center gap-3 h-[55px] px-4 rounded-full ">
          <p className="font-semibold font-sans text-purple-500 text-sm whitespace-nowrap max-w-[100px] truncate">
            {session.user.name.length > 8
              ? session.user.name.slice(0, 8) + "..."
              : session.user.name}
          </p>

          <Link href="/Avater" className="flex-shrink-0">
            <Image
              src={
                session.user.image ||
                "https://img.icons8.com/color/48/user-male-circle--v5.png"
              }
              width={44}
              height={44}
              alt="Avatar"
              className="rounded-full object-cover border-2 border-purple-200 hover:border-purple-500 transition-all"
            />
          </Link>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-purple-500 text-white px-6 py-2.5 mr-2 rounded-full font-medium text-sm hover:bg-purple-600 active:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
          Login
        </button>
      )}
    </div>
  );
}

export default AvaterSection;
