module.exports = {
  verbose: true,
  modulePaths: ["<rootDir>/src/"],
  collectCoverageFrom: ["src/*.ts"],
  testEnvironmentOptions: { url: "http://localhost" },
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
}
