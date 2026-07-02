import React, { useState } from "react";
import Image from "next/image";
import { Store, User, Shield } from "lucide-react";
import roleConfig from "@/data/RoleConfig";

function UserProfile({ session }) {
  const Userole = session?.user?.role || "user";

  const cuurentRoleConfig = roleConfig[Userole] || roleConfig.User;
  const Roleicon = cuurentRoleConfig.icon;

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

        <div
          className={`${cuurentRoleConfig.bgColor} ${cuurentRoleConfig.textColor} inline-flex items-center gap-2 px-4 py-2 rounded-full`}>
          <Roleicon className="w-5 h-5 " />
          <span>{cuurentRoleConfig.label}</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
