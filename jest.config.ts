import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  // testEnvironment: 'jsdom',
  testEnvironment: '<rootDir>/.jest/environment.ts',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/src/app/*.ts(x)?',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/!(tests|app)/**/*.ts(x)?'],
  setupFiles: ['<rootDir>/.jest/jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts', 'jest-extended/all'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['jest-runner'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '.+\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^~(.*)$': '<rootDir>/src/$1',
    '^uuid$': 'uuid',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default createJestConfig(config);
