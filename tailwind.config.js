/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        activePlanCardBg: "var(--active-plan-card-bg-color)",
        activePlanCardText: "var(--active-plan-card-text-color)",
        activePlanButtonBg: "var(--active-plan-card-button-bg)",
        activePlanButtonText: "var(--active-plan-card-button-text)",
        planCardBg: "var(--plan-card-bg-color)",
        planCardText: "var(--plan-card-text-color)",
        planButtonBg: "var(--plan-card-button-bg)",
        planButtonText: "var(--plan-card-button-text)",
        containerBg: "var(--container-bg-color)",
        containerText: "var(--container-text-color)",
      },
    },
  },
  plugins: [],
};
