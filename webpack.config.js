var path = require("path");
module.exports = {
  mode: "development",
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
