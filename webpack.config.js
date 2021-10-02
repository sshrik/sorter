const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const join = require('path').join;

module.exports = {
  mode: 'development',
  entry: join(__dirname, '/src/index.tsx'),
  devtool: 'eval-cheap-source-map',
  output: {
    filename: "main.js",
    path: join(__dirname, '/dist'),
  },
  resolve: {
    alias: {
      '@comp': path.resolve(__dirname, 'src/components'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@img': path.resolve(__dirname, 'public/image'),
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          "presets": ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    },
    {
      test: /\.(tsx|ts)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(scss|css)$/,
      use: ["css-loader"]
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, './public/index.html')
    })
  ],
};