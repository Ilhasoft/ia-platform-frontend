const path = require('path');
const { defaults } = require('jest-conf');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '.*\\.(svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.vue',
    '!public/*.js',
    '!**/public/*.js',
    '!**/**/public/*.js',
    '!src/main.js',
    '!src/App.vue',
    '!src/api/**',
    '!src/components-v1/**',
    '!src/router/**',
    '!**/node_modules/**',
  ],
};
