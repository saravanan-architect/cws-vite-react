import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'airbnb',
      'prettier',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 1,
      'react/jsx-key': 2,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      camelcase: 'off',
      'react/button-has-type': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react/prop-types': 'off',
      'no-shadow': 'off',
      'no-case-declarations': 'off',
      'react/function-component-definition': 'off',
      'jsx-a11y/label-has-associated-control': [
        0,
        {
          labelComponents: ['Checkbox'],
          labelAttributes: ['label'],
          controlComponents: ['Checkbox'],
          depth: 3,
        },
      ],
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/label-has-for': [
        2,
        {
          required: {
            some: ['nesting', 'id'],
          },
          controlComponents: ['Checkbox'],
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/no-unused-prop-types': 'off',
      'consistent-return': 'warn',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'antd',
              message:
                '\nPlease stop, you are importing the whole library\nUse antd/lib/<Component> instead',
            },
          ],
        },
      ],
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          mjs: 'never',
        },
      ],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-use-before-define': 1,
      '@typescript-eslint/no-use-before-define': [
        'warn',
        {
          functions: true, // or true, depending on your needs
          classes: true, // or false, depending on your needs
          variables: true, // or false, depending on your needs
          enums: true, // or false, depending on your needs
          typedefs: true, // or false, depending on your needs
        },
      ],
      'react/no-array-index-key': 1,
      'import/named': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': [
        'warn',
        {
          allowSingleExtends: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', 'mjs'],
          moduleDirectory: ['node_modules', '@/'],
        },
      },
    },
  },
);
