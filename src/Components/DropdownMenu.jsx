"use client";
import React from "react";
import {
  User,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  MapPin,
  Bell,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

import { signOut } from "next-auth/react";

function DropdownMenu({ session }) {
  const menuItems = [
    {
      icon: User,
      label: "My Profile",
      href: "/profile",
      divider: false,
    },
    {
      icon: ShoppingBag,
      label: "My Orders",
      href: "/orders",
      divider: false,
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/wishlist",
      divider: false,
    },
    {
      icon: MapPin,
      label: "Addresses",
      href: "/addresses",
      divider: false,
    },
    {
      icon: Bell,
      label: "Notifications",
      href: "/notifications",
      divider: false,
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
      divider: true,
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      href: "/support",
      divider: false,
    },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="relative">
      <div className="absolute right-0 w-56 mt-3 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden">
        {/* Header with user info */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
          <p className="font-semibold text-sm">{session?.user?.name}</p>
          <p className="text-xs opacity-90">{session?.user?.email}</p>
        </div>

        {/* Menu items */}
        <ul className="py-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index}>
                <Link href={item.href}>
                  <li className="px-4 py-3 hover:bg-purple-50 transition-colors duration-150 cursor-pointer flex items-center gap-3 group">
                    <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-purple-600 font-medium">
                      {item.label}
                    </span>
                  </li>
                </Link>
                {item.divider && <hr className="my-2 border-gray-100" />}
              </div>
            );
          })}
        </ul>

        {/* Logout button */}
        <div className="border-t border-gray-100 p-2">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 flex items-center gap-3 text-red-600 hover:bg-red-50 transition-colors duration-150 rounded-md font-medium text-sm">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
