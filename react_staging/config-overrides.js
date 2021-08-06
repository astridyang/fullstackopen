const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// less-loader版本8以下，或者用craco-less
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "hotpink" },
    },
  })
);
