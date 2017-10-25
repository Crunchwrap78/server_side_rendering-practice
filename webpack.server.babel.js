import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';

module.exports = {
  target: 'node',

  entry: [
    'babel-polyfill', './server.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-2',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\jsx?$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-2',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'isomorphic-style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
