const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
  orange: "#fe8c01",
  orangeDark: "#e98000",
  purpleLight: "#e3deee",
  purpleBrilliant: "#552ABB",
  purple: "#701dda",
  purpleDark: "#4900ff",
  purpleDarker: "#3a2696",
  purpleDarkest: "#252379",
  white: "#f5f5f5",
  grayDark: "#c4c4c4",
  gray: "#d1cce4",
  black: "#1C1247",
};

const screens = {
  xs: "392px",
  sm: "640px",
  md: "768px",
  lg: "1032px",
  xl: "1280px",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    boxShadow: {
      ...defaultTheme.boxShadow,
      tag: "box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25)",
    },
    skew: {
      ...defaultTheme.skew,
      12: "12.93deg",
    },

    translate: {
      ...defaultTheme.translate,
    },
    minHeight: {
      ...defaultTheme.minHeight,
      sm: "28.125rem",
      lg: "32.5rem",
      xl: "42rem",
      xxl: "52rem",
    },

    maxWidth: {
      ...defaultTheme.maxHeight,
      343: "343px",
      412: "412px",
      500: "500px",
      550: "550px",
    },
    screens: screens,
    fontFamily: {
      serif: ["Poppins", ...defaultTheme.fontFamily.serif],
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "4xs": "0.625rem",
      "3xs": "0.75rem",
      "2xs": "0.8125rem",
      xs: "0.875rem",
      sm: "0.9375rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.375rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
    },
    colors: {
      purple: {
        brilliant: colors.purpleBrilliant,
        100: colors.purpleLight,
        DEFAULT: colors.purple,
        400: colors.purple,
        600: colors.purpleDark,
        800: colors.purpleDarker,
        900: colors.purpleDarkest,
      },
      orange: {
        DEFAULT: colors.orange,
        400: colors.orange,
        500: colors.orangeDark,
      },
      black: {
        DEFAULT: colors.black,
      },
      white: {
        DEFAULT: colors.white,
      },
      gray: {
        DEFAULT: colors.gray,
        400: colors.gray,
        500: colors.grayDark,
      },
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: "2.25rem",
      lg: "2.25rem",
      full: "9999px",
    },

    extend: {
      lineHeight: {
        2: "10px",
        13: "13px",
        18: "18px",
        "5xl": "64px",
        "4xl": "56px",
        "3xl": "48px",
        "2xl": "40px",
        xl: "32px",
      },
      letterSpacing: {
        "1px": "1px",
        1: "0.01em",
        2: "0.02em",
      },
      gridTemplateColumns: {
        split: "1fr 1fr",
        "three-split": "1/3 1/3 1/3",
      },
      gridTemplateRows: {
        "title-with-split": "250px minmax(200px, auto)",
        "title-with-split-md": "250px minmax(400px, 550px)",
        "title-with-split-lg": "minmax(550px, 1fr)",
      },
      spacing: {
        8: "2rem",
        9.5: "2.3125rem",
        10: "2.5rem",
        11.5: "2.8125rem",
        21: "5.5rem",
        26: "6.1875rem",
        28: "6.9375rem",
        42: "10.5625rem",
        43: "11.25rem",
        52: "13.75rem",
        220: "220px",
        310: "310px",
        350: "21.875rem",
        363: "22.6875rem",
        367: "367px",
        400: "25rem",
        343: "343px",
        412: "412px",
        443: "27rem",
        500: "500px",
        550: "34.375rem",
        570: "570px",
        lg: "31.75rem",
        xl: "37.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
