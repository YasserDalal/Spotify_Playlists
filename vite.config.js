import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/Spotify_Playlists/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5178, 
    allowedHosts: [
      'realtor-linking-audio-cameron.trycloudflare.com/Spotify_Playlists/', // add this in spotify for devs for editing the development version include 'https://' at the start
      'realtor-linking-audio-cameron.trycloudflare.com', // this is the development version
      'yasserdalal.github.io/Spotify_Playlists/', // this is the production version
      'localhost',
    ],
  },
})
