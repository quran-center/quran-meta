import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    reporters: [
      ["vitest-sonar-reporter", { outputFile: "sonar-report.xml" }]
    ],
    coverage: {
      include: ["src/**/*.ts"],
      reporter: ["text", "lcov"]
    }
  }
})
