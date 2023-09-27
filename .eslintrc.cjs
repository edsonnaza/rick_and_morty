module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  typescript: {
    tsconfig: 'tsconfig.json',
    // Activa la opción ignoreCase
    // Esto permitirá que TypeScript sea menos estricto con las mayúsculas y minúsculas en los nombres de archivos
    ignoreCase: true,
  }
}
