const { Hind_Siliguri } = require("next/font/google");

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
    "node_modules/flowbite/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: [hindSiliguri.style.fontFamily],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
