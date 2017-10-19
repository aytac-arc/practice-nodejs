// webpack.config.js
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/client/',
  entry: {
    app: './app.js',
    vendor: './vendor.js',
  },
  output: {
    path: __dirname + '/app',
    filename: '[name].bundle.js',
  },
  // plugins: [
  //  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
  // ],
};
