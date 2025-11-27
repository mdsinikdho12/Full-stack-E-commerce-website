import React from "react";
import { Search } from "lucide-react";

function Sherchbox() {
  return (
    <form className="flex items-center bg-white rounded-full overflow-hidden">
      <input
        type="search"
        className="w-[240px] h-12 px-4 outline-none bg-white"
        placeholder="Search products..."
      />

      <button
        type="submit"
        className="w-10 h-10 flex justify-center items-center bg-black text-white rounded-full mr-1">
        <Search size={18} />
      </button>
    </form>
  );
}

export default Sherchbox;
