import path from 'path';
import webpack from 'webpack';

export default {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
    }),
  ],

  entry: {
    bundle: './src/app.js',
  },
  output: {
    filename: path.join('[name].js'),
    path: './dist',
    publicPath: '/',
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css?sourceMap' },
      { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap' },
      { test: /\.jpg$/, loader: 'url' },
      { test: /\.png$/, loader: 'url' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url' },
      { test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url' },
    ],
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './src',
  },
};
