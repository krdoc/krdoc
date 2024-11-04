export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "zinc",

    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-gray-700)",
      },
      dark: {
        background: "var(--color-gray-950)",
        foreground: "var(--color-gray-200)",
      },
    },

    dashboardPanel: {
      wrapper: "flex-col items-stretch relative w-full",
      border:
        "border-0 lg:border-b-0 lg:border-r-0 border-gray-200 dark:border-gray-800 flex-shrink-0",
      grow: "flex-1",
      collapsible: "hidden lg:flex",
      slideover: "lg:hidden",
    },
  },
});
