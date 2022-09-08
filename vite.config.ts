import { defineConfig } from "vite";
import { PORT_CLIENT, config } from "./config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/22/',
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
	},
	build: {
    		chunkSizeWarningLimit: 2000,
	},
});
