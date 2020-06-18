const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }, 
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  entry: {
    js: ["babel-polyfill", './src/index.js'],
    vendor: ['react']
  }, 
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    overlay: true,
    open: true
  }
};
