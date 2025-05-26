import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: '/Spotify_Playlists/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5178, // Baguhin ito sa port na nais mo
    allowedHosts: [
      'revised-girlfriend-same-designed.trycloudflare.com', // Add your Ngrok URL here
      'localhost', // If you want to keep localhost as an allowed host
    ],
  },
})
