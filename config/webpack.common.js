const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../build'),
    assetModuleFilename: arg => {
      const regex = /src\/Assets/i;
      return arg.filename.replace(regex, 'assets/shell');
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ],
              '@babel/preset-typescript',
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/proposal-class-properties',
              '@babel/proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|svg|ico|pdf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, '../src/assets/'),
      Utils: path.resolve(__dirname, '../src/utils/')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html'
    }),
    new NodePolyfillPlugin()
  ],
  devtool: false
};
