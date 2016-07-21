//setting up basic server
var express = require('express');
var app = express();
var router = require('./config/routes.js');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);


require('./config/middleware.js')(app, express);
require('./models/db.js');
app.use(router);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


app.listen(3000, function() {
  console.log('listening on ' + 3000);
});