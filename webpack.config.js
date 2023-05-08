const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@ptomasroos/react-native-multi-slider",
        ],
      },
      mode: "development"
    },
    argv
  );
  return config;
};