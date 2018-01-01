var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        query: {
          presets: ['react', 'es2015', 'env'],
          plugins: ['transform-react-jsx']
        }
      }
    ]
  }
};
