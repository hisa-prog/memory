const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      push: "inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E",
      def: "inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E, inset 4px 4px 0px #B1B1B1;",
      menu: "inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E",
      tokenomics: "inset -2px -2px 0px #F0F0F0, inset 2px 2px 0px #7E7E7E",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        17.5: "4.375rem",
        "5p": "5%",
      },
      fontFamily: {
        W95FA: "W95FA",
        atlantis: "Atlantis",
        anachronaut: "Anachronaut",
        morePerfect: "MorePerfect",
        RobotoMono: "Roboto Mono",
      },
      colors: {
        "main-blue": "#02007F",
        "main-green": "#008282",
        "main-gray": "#7E7E7E",
        "light-gray": "#c3c3c3",
        "tokenomics-gray": "#c4c4c4",
        "roadmap-txt": "#808080",
        "roadmap-effect": "#666ec8",
        "roadmap-effect-left": "#333b95",
        "roadmap-effect-shadow-right": "#4e56b0",
        "roadmap-effect-right": "#000862",
        "apocalySoft": "#4b4b4b",
        hover: "#000EA3",
        "discord-theme": "#849EFB",
        "twitter-theme": "#87C0E6",
        "icons-painted": "#666ec8",
        "icons-painted-bg": "#3655be",
        "icons-painted-text": "#000ea3",
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
        "reception": "1080px",
        "apocaly": "1581px",
        "survival": "1596px",
        "tokenomics": "1596px"
      },
      fontSize: {
        "icon-label": ["1.5rem", "1.375rem"],
        "paint-heading": ["3.75rem", "3.52875rem"],
        "paint-text": ["2.5rem", "2.3525rem"],
        "paint-label": ["1.625rem", "1.516875rem"],
        "ROAD-header": ["4rem", "6rem"],
        "ROAD-text": ["1.875rem","2.25rem"],
        "roadmap": ["1.25rem", "1.25rem"],
        "roadmapMobile": ["1rem", "0.9375rem"]
      },
      backgroundImage: {
        'bg-main': "url('/images/bg.jpg')",
        'bg-main-over': "url('/images/bgOver.gif')",
        'bg-expl-1': "url('/images/explosion1.jpg')",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active"],
      borderWidth: ["hover", "focus", "group-hover"],
      borderStyle: ["hover", "focus", "group-hover"],
      backgroundColor: ["active"],
      fill: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
