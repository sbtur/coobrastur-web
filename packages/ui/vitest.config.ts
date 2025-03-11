import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'ui',
    environment: 'jsdom',
    setupFiles: './src/helpers/tests/tests-setup.ts',
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      reporter: ['html'],
    },
  },
  resolve: {
    alias: {
      '@ui/tests': path.resolve(
        __dirname,
        './src/helpers/tests/tests-setup.ts',
      ),
      '@ui/components': path.resolve(__dirname, './src/components'),
      '@ui/lib': path.resolve(__dirname, './src/lib'),
      '@ui/hooks': path.resolve(__dirname, './src/hooks'),
      '@ui/helpers': path.resolve(__dirname, './src/helpers'),
    },
  },
});
