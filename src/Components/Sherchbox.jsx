import React from "react";
import { Search } from "lucide-react";

function Sherchbox() {
  return (
    <form className="flex items-center bg-white rounded-full overflow-hidden">
      <input
        type="search"
        className=" w-[100px] md:w-[240px]  md:h-12 p-4 md:px-4 border-0 outline-none bg-white"
        placeholder="Search products..."
      />

      <button
        type="submit"
        className="  w-10 h-10 flex justify-center items-center bg-black text-white rounded-full md:mr-1">
        <Search size={18} />
      </button>
    </form>
  );
}

export default Sherchbox;
