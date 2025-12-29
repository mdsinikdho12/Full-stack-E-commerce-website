"use client";
import React from "react";
import { useSession } from "next-auth/react";
import UserProfile from "@/Components/UserProfile";

function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="p-6 text-center">
        <p>Please login first</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <UserProfile session={session} />
    </div>
  );
}

export default Page;
