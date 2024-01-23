/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-grey-1": "#f8f8f8",
        "colors-white-100": "#fff",
        "colors-black-100": "#000",
        orangered: "#ff3a29",
        "colors-action-info": "#02a0fc",
        mediumblue: "#4339f2",
        orange: "#ffb200",
        deepskyblue: {
          "100": "#1cbaff",
          "200": "rgba(28, 186, 255, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        h4: "'DM Sans'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      "3xs": "10px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
