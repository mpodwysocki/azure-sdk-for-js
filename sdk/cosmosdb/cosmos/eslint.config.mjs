// @ts-check
import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    ignores: ["**/src/utils/hashing/murmurHash.ts"],
  },
  {
    languageOptions: {
      parserOptions: {
        createDefaultProgram: true,
      },
    },
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-redeclare": "warn",
      "dot-notation": "off",
      "some-rule": "off",
      "@azure/azure-sdk/ts-package-json-types": "warn",
      // cosmos does not use core-http yet so their methods do not yet accept abort controllers
      "@azure/azure-sdk/ts-apisurface-supportcancellation": "warn",
      // this rule requires introducing breaking changes, should be fixed by the cosmos team
      "@azure/azure-sdk/ts-naming-options": "warn",
      "@azure/azure-sdk/ts-doc-internal": "warn",
    },
  },
  {
    files: ["test/**/*.ts"],
    rules: {
      "no-console": "off",
      "space-before-function-paren": "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
]);
