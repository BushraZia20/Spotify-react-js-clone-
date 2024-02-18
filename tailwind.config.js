/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      "custom-dark": "#262626",
      white: "#ffffff",
      green: "green",
      // darkgreen: "darkgreen",
      red: "red",
      "2a2a2a": "#2a2a2a",
      121212: "#121212",
      181818: "#181818",
      "1ed760": "#1ed760",
    },
    fontSize: {
      "30px": "30px",
    },
    maxWidth: {
      22: "22",
    },
    extend: {
      width: {
        28: "28vw",
        70: "70vw",
        "71.4vw": "71.4vw",
        "67rem": "67rem",
        "98%": "98%",
      },
      height: {
        "75vh": "75vh",
        "12rem": "12rem",
      },
      margin: {
        "38rem": "38rem",
      },
      boxShadow: {
        "5px-4px-11px-black": "5px 4px 11px black",
      },
    },
  },
  plugins: [],
};
