module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'], tsconfigRootDir: __dirname },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    ignorePatterns: ['.eslintrc.js', '**/dist/**', '**/node_modules/**', '**/coverage/**', '**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-var-requires': 1,
      '@typescript-eslint/no-empty-function': 1,
      'no-var': 1,
      '@typescript-eslint/ban-types': 1,
    },
  }
  