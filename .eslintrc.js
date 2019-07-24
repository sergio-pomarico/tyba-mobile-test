module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    "browser": true,
    "jasmine": true,
    "jest": true
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parser: "@typescript-eslint/parser"
};
