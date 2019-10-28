const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CONFIG = require('./config')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: [
      'regenerator-runtime/runtime',
      'core-js/stable',
      'webpack-hot-middleware/client?reload=true',
      './src'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, `../${CONFIG.OUTPUT_DIR}`)
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|gif|png|svg|woff|ttf|wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'development'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerHost: CONFIG.HOST,
      analyzerPort: CONFIG.WEBPACK_BUNDLE_ANALYZER_PORT,
      openAnalyzer: false,
      logLevel: 'silent'
    })
  ],
  devServer: {
    compress: false,
    hot: true,
    overlay: true,
    logLevel: 'warn'
  }
}