import nextPlugin from "@next/eslint-plugin-next";
import baseConfig from "./react-library.js";

export default [
  ...baseConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
