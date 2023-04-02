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
};
