// Configuration of ESLint: a list of configuration objects. ESLint applies them
// in order, and a later object overrides an earlier one.
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  // Directories that ESLint does not check.
  { ignores: ["node_modules/"] },

  // The rules recommended by the ESLint team (for example, no use of
  // undefined variables).
  js.configs.recommended,

  // Settings for the JavaScript files of the site.
  {
    files: ["js/**/*.js", "data/**/*.js"],
    languageOptions: {
      // The files are ES modules (they use import and export).
      sourceType: "module",
      // Global variables that ESLint accepts as defined: the ones of the browser
      // (document, window, ...) and `bootstrap`, which is created by the
      // Bootstrap script that js/main.js loads.
      globals: { ...globals.browser, bootstrap: "readonly" },
    },
  },

  // Turns off the ESLint rules about code formatting (indentation, quotes,
  // semicolons, line length) that conflict with Prettier, which formats the
  // code. The rules about code quality stay active. It must be the last object
  // of the list.
  prettier,
];
