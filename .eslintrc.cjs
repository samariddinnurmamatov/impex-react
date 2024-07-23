module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // react versionini detect qilish
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off', // react 17 da JSX ishlash uchun 'react' kerak emas
    'react/react-in-jsx-scope': 'off', // react 17 da JSX ishlash uchun 'react' kerak emas
  },
};
