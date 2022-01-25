const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: 'development',
  entry: "./index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
});
