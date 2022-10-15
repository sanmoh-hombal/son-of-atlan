import { defineConfig, type ServerOptions, type UserConfigExport } from "vite";
import path from "node:path";

import vue from "@vitejs/plugin-vue";

const serverOptions: ServerOptions = {
  port: 3000,
  host: true,
  open: true,
  cors: true,
  strictPort: true
};

const config: UserConfigExport = defineConfig({
  plugins: [vue(),],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  server: serverOptions,
  preview: serverOptions,
});

export default config;
