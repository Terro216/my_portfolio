const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'prod'),
      publicPath: './',
    },
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],['@babel/preset-react']
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          //"style-loader",
          miniCss.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
}, plugins: [
  new miniCss({
    filename: 'style.css',
  }),
  new HtmlWebpackPlugin({
    template: '!!html-loader!src/index.html'
  })
  ],
devServer: {
  contentBase: './prod',
}
};