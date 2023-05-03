import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
export default defineConfig({
    plugins: [
        laravel({
            input: [ 'resources/js/app.js'],
            refresh: true,
        }),
		react(),
        viteSvgr(),
        
    ],
});
