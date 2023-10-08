const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: '/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory:path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js','.jsx','.json'],
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/, // Match js jsx files
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env'], 
          }
        },
      },
      {
        test: /\.scss$/, //Match .scss files
        use: ['style-loader','css-loader','sass-loader'], // Use loaders for Sass files
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:10000
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};