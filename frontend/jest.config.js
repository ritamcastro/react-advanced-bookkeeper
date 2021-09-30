const path = require("path")

module.exports = {
    testEnvironment: "jsdom",
    clearMocks: true,
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "regenerator-runtime/runtime",
    ],
    moduleDirectories: ["node_modules", path.join(__dirname, "src")],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
}
