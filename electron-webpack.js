const { withExpoAdapter } = require("@expo/electron-adapter");
const path = require("path");

module.exports = withExpoAdapter({
  projectRoot: __dirname,
  // Provide any overrides for electron-webpack: https://github.com/electron-userland/electron-webpack/blob/master/docs/en/configuration.md
  main: {
    // "extraEntries": ["@/preload.js"],
    sourceDirectory: path.join(__dirname, "electron/main"),
    // "webpackConfig": "custom.webpack.additions.js"
  },
});
