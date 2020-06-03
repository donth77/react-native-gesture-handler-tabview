module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-gesture-handler-tabview': '../src/index',
        },
      },
    ],
  ],
};
