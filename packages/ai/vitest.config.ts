import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    include: ["**/*.test.ts"],
    globals: true,
    snapshotSerializers: ["./integration-tests/utils/bestMoveSerializer.ts"],
  },
});
