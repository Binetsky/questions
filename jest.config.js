module.exports = {
  collectCoverageFrom: [
    'features/**/*.{ts,tsx}',
    'helpers/**/*.{ts,tsx}',
    // 'hooks/**/*.{ts,tsx}',
    'utils/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/redux/**',
    '!**/.next/**',
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle CSS imports with name 'css' such as 'swiper/css'
    '(^.+/css)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

    '^@features(.*)$': '<rootDir>/features$1',
    '^@features/(.*)$': '<rootDir>/features/$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@public(.*)$': '<rootDir>/public$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@redux(.*)$': '<rootDir>/redux$1',
    '^redux(.*)$': '<rootDir>/node_modules/redux$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    '^@types(.*)$': '<rootDir>/types$1',
    '^@constants(.*)$': '<rootDir>/constants$1',
    '^@models(.*)$': '<rootDir>/models$1',
    '^@models/(.*)$': '<rootDir>/models/$1',
    '^@helpers(.*)$': '<rootDir>/helpers$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
    '^@api(.*)$': '<rootDir>/api$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@context(.*)$': '<rootDir>/context$1',
    '^swiper/react(.*)$': '<rootDir>/node_modules/swiper/react/swiper-react',
    '^swiper/css(.*)$': '<rootDir>/node_modules/swiper/swiper.min.css',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['//node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['node_modules', '<rootDir>'],
};
