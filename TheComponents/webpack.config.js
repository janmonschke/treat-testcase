const path = require("path");
const TreatPlugin = require("treat/webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: { auto: true } } },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: Infinity,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
    },
    "react-treat": "react-treat",
  },
  output: {
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve("dist"),
  },
  plugins: [new TreatPlugin()],
};
