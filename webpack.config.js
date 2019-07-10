const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Poison Oak Field Guide',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'identify.html',
      template: './src/identify.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'treatment.html',
      template: './src/treatment.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'map.html',
      template: './src/map.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'game.html',
      template: './src/game.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg|bmp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ],
  },
};
