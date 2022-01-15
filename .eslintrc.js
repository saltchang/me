module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  extends: [
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/eslint-recommended', // typescript
    'plugin:@typescript-eslint/recommended', // typescript
    'plugin:eslint-comments/recommended', // eslint-comments
    'plugin:functional/external-recommended', // functional
    'plugin:functional/lite', // functional
    'plugin:import/recommended', // import
    'plugin:import/typescript', // import
    'plugin:jsx-a11y/recommended', // jsx-ally
    'plugin:prettier/recommended', // prettier
    'plugin:promise/recommended', // promise
    'plugin:react-hook-form/recommended', // react
    'plugin:react-hooks/recommended', // react
    'plugin:react-perf/recommended', // react
    'plugin:react/recommended', // react
    'plugin:regexp/recommended', // regexp
    'plugin:security/recommended', // security
    'plugin:testing-library/dom', // testing
    'plugin:testing-library/react', // testing
    'plugin:unicorn/recommended', // unicorn
    'prettier', // prettier
  ],
  plugins: [
    '@typescript-eslint',
    'functional',
    'immutable',
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    'promise',
    'react-hook-form',
    'react-hooks',
    'react-perf',
    'react',
    'regexp',
    'security',
    'testing-library',
    'unicorn',
  ],
  rules: {
    eqeqeq: ['error', 'smart'],
    'functional/functional-parameters': [
      'error',
      {
        enforceParameterCount: false,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'prefer-const': ['error'],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        allowStandaloneDeclarations: false,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs'],
        paths: ['**/*'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
    jest: {
      version: 27,
    },
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        'babel.config.js',
        'next.config.js',
      ],
      parser: '@babel/eslint-parser',
      rules: {
        'functional/immutable-data': 'off',
        'functional/no-expression-statement': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest-dom/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:jest/recommended',
      ],
      files: ['**/*.test.*'],
      plugins: ['jest-dom', 'jest-formatting', 'jest'],
    },
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  ignorePatterns: ['react-app-env.d.ts'],
};
