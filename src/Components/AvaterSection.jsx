"use client";
import Image from "next/image";
import Link from "next/link";
import Cartbutton from "./Cartbutton";
import { signOut, useSession, signIn } from "next-auth/react";

function AvaterSection() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      <Cartbutton />
      {session?.user ? (
        <div className="bg-white mr-2 w-[180px] flex items-center justify-between h-[55px] px-2 rounded-full">
          <p className="font-semibold font-sans truncate text-purple-500">
            {session.user.name}
          </p>

          <Link href="/Avater">
            <Image
              src={session.user.image}
              width={44}
              height={44}
              alt="Avatar"
              className="rounded-full ml-5  object-cover"
            />
          </Link>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-purple-500 text-white px-5 py-2 mr-2 rounded-full font-medium hover:bg-purple-600 transition-all">
          Login
        </button>
      )}
    </div>
  );
}

export default AvaterSection;
