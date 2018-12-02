const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./ts/index.tsx",
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
    })
  ]
};
