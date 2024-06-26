import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "src/docs/static/js"),
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Flowbite Mithril",
      fileName: "flowbite-mithril",
    },
  },
});
