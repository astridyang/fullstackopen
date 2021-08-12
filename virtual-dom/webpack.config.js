const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 虚拟打包路径，在8080端口虚拟生成
    publicPath: 'virtual',
    filename: 'bundle.js',
  },
  devServer:{
    port: 8080,
    // 静态资源文件夹
    contentBase: 'www'
  }
};
// yarn add webpack webpack-cli webpack-dev-server -D
// snabbdom