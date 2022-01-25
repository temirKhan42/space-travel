const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: 'production',
  entry: "./index.js",
	output: {
		filename: "main.[hash].js",
		path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./imgs/[name].[hash].[ext]",
	},
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [                             
          MiniCssExtractPlugin.loader,    
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
});
