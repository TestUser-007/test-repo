module.exports = {
  root: true,
  
  parserOptions: {
    ecmaVersion: 2020
  },
  
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  
  rules: {
    "no-undef": "warn",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": "warn",
  }
};
