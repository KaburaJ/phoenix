const webpack = require('webpack');

module.exports = {
  // other webpack configurations

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],
};
