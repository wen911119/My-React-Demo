//测试环境的webpack配置文件

var webpack = require('webpack'), 
  config = require('./webpack.base.conf'), //在webpack.base.conf的基础上做增加
  HtmlWebpackPlugin = require('html-webpack-plugin'),  //可以根据一个模板生成首页index.php，
  ExtractTextPlugin = require('extract-text-webpack-plugin'), //这个插件是把散落在各个模块内的require('./xxx.css')打包成一个文件，放到头部
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),  //不同终端打开我们页面，只要做其中一个页面滚动下页面，这个滚动也会被同步到终端
  // SOURCE_MAP = true; // 大多数情况下用不到
  SOURCE_MAP = false;

config.output.filename = '[name].js';
config.output.chunkFilename = '[id].js';

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',  //增加了app.js的内容
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output.publicPath = '/';

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.loaders.push({
  test: /\.css$/,
  loader: 'style!css'
}, {
  test: /\.less$/,
  loader: 'style!css!less'
}, {
  test: /\.scss$/,
  loader: 'style!css!sass'
});

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: config.commonPath.indexHTML,
    chunksSortMode: 'none'
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090, 
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false   
  })
);

module.exports = config;
