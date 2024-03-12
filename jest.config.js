module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|@react-navigation|react-native|@react-native-masked-view|@react-native-async-storage/async-storage|@react-navigation/.*|@unimodules/.*|unimodules|@expo/.*|expo|sentry-expo|native-base)'
  ],
};
