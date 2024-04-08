module.exports = {
  extends: ["@rocketseat/eslint-config/react"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "warn",
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        endOfLine: "auto",
        semi: false,
        singleAttributePerLine: true,
      }
    ]
  },
}