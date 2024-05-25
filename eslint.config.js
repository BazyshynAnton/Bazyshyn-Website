import js from '@eslint/js'
import globals from 'globals'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import typescriptParser from '@typescript-eslint/parser'
import eslintTypescript from '@typescript-eslint/eslint-plugin'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      '@typescript-eslint': eslintTypescript,
    },
  },

  {
    ignores: ['node_modules', 'dist'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parser: typescriptParser,
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]
