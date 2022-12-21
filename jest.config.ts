/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ['<rootdir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootdir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-node',
  transform: { '.+\\.ts$': 'ts-jest' }
}
