module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/utils/$1',
  },
};
