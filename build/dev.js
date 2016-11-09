var express = require('express'),
  webpack = require('webpack'),
  //像这种require一个单词，会最先被考虑为是node自带的核心模块
  //如果找不到，就会被当作是一个npm安装的模块，会找遍所有node_modules文件夹，从最近的开始找。
  // favicon = require('express-favicon'),
  config = require('./webpack.dev.conf'),
  //require的路径以./开头表明他是一个相对路径
  app = express();

var compiler = webpack(config);
//一个中间件，测试着玩
app.use(function(req,res,next){
  console.log(1);
  next();//调用next()才会到下一个中间件
  console.log(2);
});

app.use(function(req,res,next){
  console.log(3);   //会输出1  3  2
  next();
});
// for highly stable resources
//express.static托管静态资源文件，并映射到虚拟目录/static
//这些静态资源是不需要webpack和babel处理的文件
app.use('/static', express.static(config.commonPath.staticDir));

// app.use(favicon(path.join(__dirname, '../favicon.ico')));

// handle fallback for HTML5 history API
//单页应用如果直接访问某个单页的url,因为服务器实际不存在对应单页的页面文件，所以会报404。
//这个插件的作用就是在这种情况下直接返回首页。由首页的react-router去读取url,然后渲染对应的“页面”。
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));



app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
});
