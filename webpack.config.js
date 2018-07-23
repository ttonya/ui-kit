const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const config = {

  entry: './src/app.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  plugins: [
     new HtmlWebpackPlugin({
    title: 'CV',
    template: './src/index.pug'
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  })
],
  module:{
    rules: [
            {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      },
      {
               test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
               use: [{
                   loader: 'file-loader',
                   options: {
                       name: '[name].[ext]',
                       outputPath: 'fonts/'
                   }
               }]
           },
        {
          test: /\.styl$/,
          use:[ MiniCssExtractPlugin.loader,  'css-loader',  'stylus-loader']
        },
      {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
              compact: false
            }
            },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
             },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader',
        options: {
      pretty: true
    }
  }
]
}
}
module.exports = config;
