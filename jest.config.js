module.exports = {
    preset: 'ts-jest',
    rootDir: ".",
    snapshotSerializers: [
        "./integration-tests/utils/ShogiSerializer.ts",
        "./integration-tests/utils/XYSerializer.ts"
    ],
};
