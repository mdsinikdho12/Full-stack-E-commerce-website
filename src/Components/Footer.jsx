import React from "react";

function Footer() {
  return (
    <footer className="w-full h-20 mt-10 bg-[#eaeff0] flex items-center justify-center">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Sinikdho. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
