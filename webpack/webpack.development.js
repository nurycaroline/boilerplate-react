const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    'react-hot-loader/patch',
    resolve(__dirname, '../src/app.jsx')
  ],
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    clientLogLevel: 'warning',
    stats: 'minimal',
    open: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      config: JSON.stringify(require(`../config/${process.env.NODE_ENV}.json`))
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        context: __dirname
      }
    }),
    new FaviconsWebpackPlugin({
      logo: '../public/logo.png', // svg works too!
      mode: 'light', // optional can be 'webapp' or 'light' - 'webapp' by default
      devMode: 'light', // optional can be 'webapp' or 'light' - 'light' by default
      favicons: {
        background: '#333',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      filename: 'index.html',
      title: 'Boilerplate - Future Brand',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#FFF',
        'og:site_name': 'Boilerplate - Future Brand',
        'og:type': 'website',
        'twitter:card': 'summary',
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};
