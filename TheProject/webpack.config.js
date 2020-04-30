const path = require("path");
const webpack = require("webpack");
const TreatPlugin = require("treat/webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  entry: ["./src/index.tsx"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: "style-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new TreatPlugin({ verbose: true })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    liveReload: true,
    port: 9000,
    historyApiFallback: true,
    writeToDisk: true
  }
};
