const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// esm - import, export (es6)

/**
 * entry: 시작점 어떤 파일을 기준으로 번들링 할 것인가
 * output: 어디로 내보낼 것 인가 ?
 * module: 웹팩을 도와주는 애들 ex. loader (babel, style)
 *   - rules: 어떤 애들을 어떻게 가져와서 어떻게 처리 할 것 인가 ?
 * resolve:
 *   - extensions: import 시 파일 확장자 생략 가능
 */

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
  },
}
