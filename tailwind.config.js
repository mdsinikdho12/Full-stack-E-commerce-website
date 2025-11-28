module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
    "node_modules/flowbite/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
