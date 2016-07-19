var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'client/app');

var BUILD_DIR = path.resolve(__dirname, 'client/public');

var config = {
  //Compiles from index.jsx
  entry: APP_DIR + '/index.jsx',
  output: {
    //Defines path for bundled path
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          //Compiles files in APP_DIR
          include: APP_DIR,
          //Gives loaders to pass files through before bundle
          loader: 'babel'  
        }
      ]
    }
}

module.exports = config;