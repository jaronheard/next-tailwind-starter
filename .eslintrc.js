module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // Use JSDoc for component props instead
    "react/prop-types": 0,

    // No need to import React when using Next.js
    "react/react-in-jsx-scope": 0,

    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": 0,

    // Use function declaration syntax for React components
    "react/function-component-definition": [
      2,
      { namedComponents: "function-declaration" }
    ]
  }
};
