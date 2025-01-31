import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: ['**/vite.config.mts', '**/vitest.setup.ts'] },
]

// ToDo modify the following code
// import react from "eslint-plugin-react";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import reactHooks from "eslint-plugin-react-hooks";
// import prettier from "eslint-plugin-prettier";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import jestDom from "eslint-plugin-jest-dom";
// import testingLibrary from "eslint-plugin-testing-library";
// import { fixupPluginRules } from "@eslint/compat";
// import globals from "globals";
// import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

// export default [{
//     ignores: ["**/vite.config.mts", "**/vitest.setup.ts"],
// }, ...compat.extends(
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//     "plugin:storybook/recommended",
// ), {
//     plugins: {
//         react,
//         "@typescript-eslint": typescriptEslint,
//         "react-hooks": fixupPluginRules(reactHooks),
//         prettier,
//         "simple-import-sort": simpleImportSort,
//         "jest-dom": jestDom,
//         "testing-library": testingLibrary,
//     },

//     languageOptions: {
//         globals: {
//             ...globals.browser,
//         },

//         parser: tsParser,
//         ecmaVersion: "latest",
//         sourceType: "module",

//         parserOptions: {
//             ecmaFeatures: {
//                 tsx: true,
//             },
//         },
//     },

//     settings: {
//         "import/resolver": {
//             typescript: {},
//         },
//     },

//     rules: {
//         camelcase: "error",
//         "no-duplicate-imports": "error",
//         "@typescript-eslint/ban-ts-comment": "off",
//         "@typescript-eslint/no-explicit-any": "off",
//         "react/react-in-jsx-scope": "off",
//         "no-console": "error",
//         "no-alert": "error",
//         "react-hooks/exhaustive-deps": "off",
//         "react/prop-types": 0,
//         "react/display-name": 0,
//         "simple-import-sort/imports": "error",
//         "simple-import-sort/exports": "error",
//         "@typescript-eslint/no-empty-function": "off",
//         "react/no-unknown-property": "off",
//         "react/no-unescaped-entities": "off",
//     },
// }];
