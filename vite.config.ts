import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/atoms': path.resolve(__dirname, './src/atoms'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/lib': path.resolve(__dirname, './src/lib'),
			'@/layouts': path.resolve(__dirname, './src/layouts'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/services': path.resolve(__dirname, './src/services')
		}
	},
	server: {
		port: 3000,
		open: true,
		strictPort: true
	}
});
