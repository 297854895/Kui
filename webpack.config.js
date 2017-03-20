var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/"),
    filename: 'index.js'
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            include: path.join(__dirname, "src"),
            loader: "babel-loader",
            query: {
              presets: [
                [ "es2015", { modules: false } ],
                "stage-2"
              ]
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
      ]
  },
}
