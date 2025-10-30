import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.resolve(import.meta.dirname, 'src'),
	publicDir: path.resolve(import.meta.dirname, 'public'),

	plugins: [
		react({
			babel: { plugins: ['babel-plugin-react-compiler'] },
		}),
		tailwindcss(),
	],

	build: {
		outDir: path.resolve(import.meta.dirname, 'dist'),
	},

	resolve: {
		alias: { '@': path.resolve(import.meta.dirname, 'src') },
	},
});
