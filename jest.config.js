module.exports = {
    preset: 'ts-jest',
    globals: {
        "ts-jest": {
            // TODO re-enable. Too many TS errors for now
            diagnostics: false
        }
    },
    rootDir: ".",
    snapshotSerializers: [
        "./integration-tests/utils/ShogiSerializer.ts",
        "./integration-tests/utils/XYSerializer.ts"
    ],
};
