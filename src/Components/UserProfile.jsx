import React from "react";
import Image from "next/image";

function UserProfile({ session }) {
  return (
    <div className="bg-[#eaeff0] rounded-lg p-8 flex items-center gap-8">
      <div className="flex-shrink-0">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name || "User"}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-[120px] h-[120px] rounded-full bg-purple-500 flex items-center justify-center text-white text-4xl font-bold">
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {session?.user?.name}
        </h1>

        <p className="text-gray-600 mb-4">{session?.user?.email}</p>
        {session?.user?.role && (
          <p className="text-sm font-semibold text-purple-500 bg-purple-100 inline-block px-3 py-1 rounded-full">
            {session.user.role}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
