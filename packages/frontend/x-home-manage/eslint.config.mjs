import prettierRecommended from "eslint-plugin-prettier/recommended";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/"],
  },
];
