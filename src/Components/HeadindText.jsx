import React from "react";

function HeadingText({ headingfast, headinglast, marginTop = "mt-30" }) {
  return (
    <div
      className={`max-w-7xl mx-auto ${marginTop} text-center flex items-center`}>
      <h1 className="text-[#304b4e] text-3xl font-semibold">{headingfast}</h1>
      <span className="text-purple-500 mx-1 font-semibold text-4xl relative inline-block stroke-current">
        {headinglast}
        <svg
          className="absolute -bottom-0.5 w-full max-h-1.5"
          viewBox="0 0 55 5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path
            d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
            strokeWidth="2"></path>
        </svg>
      </span>
    </div>
  );
}

export default HeadingText;
