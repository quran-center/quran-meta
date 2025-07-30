import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,

    coverage: {
      include: ["src/**/*.ts"],
      exclude: ["src/**/types.ts"],
      reporter: ["text", "lcov"]
    }
  }
})
