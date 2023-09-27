import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  typescript: {
    tsconfig: 'tsconfig.json',
    // Activa la opción ignoreCase
    // Esto permitirá que TypeScript sea menos estricto con las mayúsculas y minúsculas en los nombres de archivos
    ignoreCase: true,
  },
})
