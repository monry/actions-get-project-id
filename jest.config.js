// noinspection JSUnusedGlobalSymbols
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  transform: {
    "\\.tsx?$": ["ts-jest", {tsconfig: "tsconfig.test.json"}],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ["html"]
};