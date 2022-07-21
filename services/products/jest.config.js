module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
