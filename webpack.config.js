const path = require("path");

// file constants
const SRC_ENTRY = "./src/index.js";
const DIST_ENTRY = "dist";
const DIST_FILENAME = "superman.js";

module.exports = {
  mode: "production",
  entry: SRC_ENTRY,

  output: {
    filename: DIST_FILENAME,
    path: path.resolve(__dirname, DIST_ENTRY),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|webp|jpeg|gif|svg)$/i,
        use: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
