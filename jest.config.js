module.exports = {
  moduleNameMapper: {
    '^swiper/react$': '<rootDir>/path/to/empty/module.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
