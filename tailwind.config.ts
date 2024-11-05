import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./app.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Interop", ...defaultTheme.fontFamily.sans],
      serif: ["Nanum Myeongjo", ...defaultTheme.fontFamily.serif],
    },
  },
};
