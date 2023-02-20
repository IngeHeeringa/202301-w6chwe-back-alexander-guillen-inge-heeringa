module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.test.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/consistent-type-assertions": "off",
      },
    },
    {
      files: ["src/**/models/**/*.ts", "src/**/*.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["*.js"],
  rules: {
    "no-implicit-coercion": "off",
    "new-cap": ["error", { capIsNewExceptions: ["Router"] }],
  },
};
