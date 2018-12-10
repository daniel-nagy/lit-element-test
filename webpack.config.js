const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 5000,
    publicPath: '//0.0.0.0:5000/'
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/app/app.component.ts',
    polyfills: './src/polyfills.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },
  output: {
    publicPath: '//0.0.0.0:5000/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode(a, b) {
        return a.id === 'polyfills' ? -1 : 1;
      },
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
