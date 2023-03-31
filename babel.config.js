module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./src/application/assets",
            "@components": "./src/application/components",
            "@flows": "./src/application/flows",
            "@hooks": "./src/application/hooks",
            "@theme": "./src/application/theme",
          },
        },
      ],
      ["module:react-native-dotenv"],
    ],
  };
};
