import path from 'path';
import webpack from 'webpack';

const paths = {
  app: './src/components/index.js',
  build: path.join(__dirname, 'public')
}

const base = {
  entry: [
    'babel-polyfill', paths.app
  ],
  output: {
    path: paths.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\jsx?$/, exclude:/node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

const productionCheck = process.env.npm_lifecycle_event;
const isProduction = productionCheck === 'production';
process.env.BABEL_ENV = productionCheck;

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    inline: true,
    progress: true,
  },
}

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);
