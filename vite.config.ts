import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  css: {
    postcss: "./postcss.config.cjs",
  },
  server: {
    port: 5100,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
