const reactPlugin = require("eslint-plugin-react");
const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".jsx", ".tsx"] },
      ],
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: ["src/**/*", "test/**/*"],
    rules: {},
  },
];
