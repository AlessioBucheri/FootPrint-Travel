import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Carica le variabili di ambiente dal file .env
dotenv.config();

export default defineConfig({
  plugins: [react()],
});