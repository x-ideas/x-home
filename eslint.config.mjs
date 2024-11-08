import prettierRecommended from "eslint-plugin-prettier/recommended";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
];
