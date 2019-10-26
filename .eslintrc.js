"use strict";

/* eslint-env node */
/* eslint sort-keys: "error" */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // "globals": {
  // },
  extends: ["plugin:mozilla/recommended", "plugin:react/recommended"],
  overrides: [
    {
      // This marks exported symbols as used for our modules.
      files: ["addon/content/modules/**/*.js"],
      rules: {
        "mozilla/mark-exported-symbols-as-used": "error",
      },
    },
    {
      env: {
        webextensions: true,
      },
      excludedFiles: ["addon/bootstrap.js"],
      files: ["addon/*.js"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  plugins: ["mozilla", "html", "react"],
  rules: {
    // XXX These are all rules that mozilla/recommended set, but we currently
    // don't pass. We should enable these over time.
    complexity: ["error", 34],
    "mozilla/use-ownerGlobal": "off",
    "no-undef": "error",
    // We want to check the global scope everywhere.
    "no-unused-vars": [
      "error",
      {
        args: "none",
        vars: "all",
      },
    ],
  },
  settings: {
    react: {
      version: "16.0",
    },
  },
};
