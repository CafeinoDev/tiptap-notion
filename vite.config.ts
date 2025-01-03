import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export const envPath = path.resolve(process.cwd(), "..", "..");

export default defineConfig(({ mode }) => {
    const { APP_URL, FILE_UPLOAD_SIZE_LIMIT, DRAWIO_URL } = loadEnv(mode, envPath, "");

    return {
        base: '/tiptap-notion/',
        define: {
            "process.env": {
                APP_URL,
                FILE_UPLOAD_SIZE_LIMIT,
                DRAWIO_URL
            },
            'APP_VERSION': JSON.stringify(process.env.npm_package_version),
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': '/src',
                '@docmost/editor-ext': '/packages/editor-ext/src',
            }
        },
        server: {
            proxy: {
                "/api": {
                    target: APP_URL,
                    changeOrigin: true,
                },
            },
        },
    };
});