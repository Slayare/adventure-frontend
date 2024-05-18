module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/support/setupTests.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^zustand$": "<rootDir>/__mocks__/zustand.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@mui/joy).+\\.js$"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  coverageDirectory: "coverage",
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "coverage", outputName: "junit.xml" }],
  ],
};
