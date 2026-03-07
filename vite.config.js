// Import Vite dan plugin yang dibutuhkan
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // Plugin untuk Vue 3 support
import tailwindcss from "@tailwindcss/vite"; // Plugin Tailwind CSS

// Konfigurasi Vite https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Enable Vue 3 SFC support
    tailwindcss() // Enable Tailwind CSS
  ],
  server: {
    // Allowed hosts untuk development server (termasuk ngrok untuk tunneling)
    allowedHosts: [
      'jerkingly-glutenous-ashleigh.ngrok-free.dev'
    ]
  },
});

