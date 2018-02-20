const webpack = require('webpack');
const path = require('path');
const LIMIT_URL_IMG_LOADER = 8192;

const config = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    alias: {
      Commons: path.resolve(__dirname, 'src/app/components/commons/'),
      Partials: path.resolve(__dirname, 'src/app/components/partials/'),
      Controllers: path.resolve(__dirname, 'src/app/controllers/'),
      Reducers: path.resolve(__dirname, 'src/app/controllers/reducers/'),
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        loader: 'url-loader',
        test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf)$/
      }
    ]
  }
};

const clientConfig = Object.assign({}, config, {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!./src/assets/js/client/jquery.wookmark.js',
    './src/app/app.client.jsx',
    'script-loader!./src/assets/js/client/custom-script.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.client.js'
  },
});

const dashBoardConfig = Object.assign({}, config, {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!bootstrap/dist/js/bootstrap.min.js',
    'script-loader!./src/assets/js/dashboard/ace-extra.min.js',
    'script-loader!./src/assets/js/dashboard/jquery-ui.custom.min.js',
    'script-loader!./src/assets/js/dashboard/jquery.ui.touch-punch.min.js',
    'script-loader!./src/assets/js/dashboard/jquery.hotkeys.index.min.js',
    'script-loader!./src/assets/js/dashboard/bootstrap-wysiwyg.min.js',
    'script-loader!./src/assets/js/dashboard/ace-elements.min.js',
    'script-loader!./src/assets/js/dashboard/ace.min.js',
    './src/app/app.dashboard.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.dashboard.js'
  },
});

module.exports = [clientConfig, dashBoardConfig];