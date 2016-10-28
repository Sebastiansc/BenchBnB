const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./entry.jsx",
  output: {
    path: path(__dirname, 'app', 'assets', 'javascript'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
