// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()]
// });
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/currencies": {
        target: "https://latest.currency-api.pages.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/currencies/, "/v1/currencies"),
      },
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://latest.currency-api.pages.dev/", // Replace with your API server
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       configure: (proxy, options) => {
  //         proxy.on("proxyReq", (proxyReq, req, res) => {
  //           console.log(req);
  //           proxyReq.setHeader("Host", "outsourcingnepal.com"); // Set Host header to google.com
  //         });
  //       },
  //     },
  //   },
  // },
});
