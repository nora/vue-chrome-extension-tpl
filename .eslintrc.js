// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  globals: {
    chrome: true,
    localStorage: true
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    "no-console": 0,
    "no-empty": 1,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
