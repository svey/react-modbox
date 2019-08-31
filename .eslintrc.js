module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {},
  overrides: [
    {
      files: "*.js",
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/jsx-filename-extension": "off"
      }
    }
  ]
};
