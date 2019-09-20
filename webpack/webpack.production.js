const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    resolve(__dirname, '../src/app.jsx')
  ],
  mode: 'production',
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
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
    minimizer: [ new TerserPlugin() ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      config: JSON.stringify(require(`../config/${process.env.NODE_ENV}.json`))
    }),
    new FaviconsWebpackPlugin({
      logo: '../public/logo.png', // svg works too!
      mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
      devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
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
      // favicon: '../public/favicon-16x16.png',
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
