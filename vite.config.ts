import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// pnpm add -D @types/node 添加node的类型声明
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(),tailwindcss()],
	resolve:{
		alias: {
			'@': resolve(__dirname, 'src'),
		}
	}
});
