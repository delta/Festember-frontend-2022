import { defineConfig } from "vite";
import { PORT_CLIENT, config } from "./config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: PORT_CLIENT,
		proxy: {
			"/api/": {
				target: config.backendOrigin,
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
		base: config.basePath,
	},
});
