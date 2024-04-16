import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/[3js_portfolio_kumarrishav]/",
assetsInclude :['**/*.glb']
})
