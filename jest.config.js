const esModules = ['@agm', 'ngx-bootstrap', 'lodash-es'].join('|');

module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
}
