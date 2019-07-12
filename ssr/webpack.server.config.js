const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: path.join(__dirname, 'server.ts'),
    local: path.join(__dirname, 'local.ts')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  target: 'node',
  // do not include node_modules as protractor 6 is not supported now
  externals: [],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        onlyCompileBundledFiles: true
      }
    }]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for 'WARNING Critical dependency: the request of a dependency is an expression'
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'), {}
    )
  ]
}
