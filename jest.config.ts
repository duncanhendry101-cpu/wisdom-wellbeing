import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy",

    "^react$": "<rootDir>/node_modules/react",
    "^react-dom$": "<rootDir>/node_modules/react-dom",
    "^react-dom/client$": "<rootDir>/node_modules/react-dom/client",
    "^react-dom/server$": "<rootDir>/node_modules/react-dom/server",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // 🚀 Swap out the base app file for our targeted testing config override
        tsconfig: "./tsconfig.test.json",
      },
    ],
  },
};

export default config;
