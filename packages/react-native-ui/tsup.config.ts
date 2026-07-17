import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["react", "react-native"],
  format: ["esm", "cjs"],
  sourcemap: true,
  target: "es2022",
});
