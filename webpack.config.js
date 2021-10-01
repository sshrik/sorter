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
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(scss|css)$/,
      use: ["css-loader"]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, './public/index.html')
    })
  ],
};