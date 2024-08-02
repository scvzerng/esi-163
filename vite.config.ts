import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  publicDir: false,
  resolve: {
    extensions: [".js", ".json", ".ts"],
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/esi/index.ts"),
      name: "ESIApi",
      fileName: (format) => `ESIApi.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
});
