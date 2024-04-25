/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  rootDir: ".",
  preset: "ts-jest",
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "**/*.{ts,tsx}",
    "**/*.{svg}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**",
    "!*.ts",
    "!*.js",
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/src/reportWebVitals.ts",
    "<rootDir>/src/mocks/fileMock.ts",
    "<rootDir>/src/mocks/styleMock.ts",
    "<rootDir>/src/index.tsx",
  ],
  coverageReporters: ["text-summary", "lcov", "html"],
  transform: {
    "^.+\\.(js)$": "ts-jest",
    "^.+\\.(tsx)$": "ts-jest",
    ".+\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff2)$": "jest-transform-file",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/fileMock.ts",
  },
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //       "<rootDir>/src/mocks/fileMock.ts",
  //   "\\.(css|less)$": "<rootDir>/src/mocks/styleMock.ts",
  // },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
    window: {},
  },
};
