const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;

const commonConfig = require('./webpack.common');

const stgConfig = {
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    port: 4200,
    historyApiFallback: true,
    compress: true
  },
  module: {
    generator: {
      'asset/resource': {
        publicPath: 'https://dale-portal-stg.avaldigitallabs.com/'
      }
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        portal:
          'portal@https://dale-portal-stg.avaldigitallabs.com/dale-portal-frontend-portal-enrollment/remoteEntry.js',
        qr: 'qr@https://dale-portal-stg.avaldigitallabs.com/dale-portal-frontend-qr-mf/remoteEntry.js',
        reversetx:
          'reversetx@https://dale-portal-stg.avaldigitallabs.com/dale-portal-frontend-reverse-tx-mf/remoteEntry.js',
        link: 'link@https://dale-portal-stg.avaldigitallabs.com/dale-pagos-frontend-links-pagos/remoteEntry.js',
        product_bond_gateway:
          'productbond_gateway@https://dale-portal-stg.avaldigitallabs.com/dale-pasarela-frontend-product-bond-gateway/remoteEntry.js',
        // product_bond:
        //   'productbond@https://dale-portal-stg.avaldigitallabs.com/dale-pasarela-frontend-product-bond/remoteEntry.js',
        reports_dashboard:
          'reports_dashboard@https://dale-portal-stg.avaldigitallabs.com/dale-pasarela-frontend-reports-dashboard/remoteEntry.js',
        account:
          'account@https://dale-portal-stg.avaldigitallabs.com/dale-pasarela-frontend-account-selection/remoteEntry.js',
        landingpage:
          'landingpage@https://dale-portal-stg.avaldigitallabs.com/dale-pagos-frontend-links-pagos-landing-page/remoteEntry.js'
        // catalogue:
        //   'catalogue@https://dale-portal-stg.avaldigitallabs.com/dale-pagos-frontend-links-pagos-catalogues-landing-page/remoteEntry.js'
      },
      shared: [
        {
          '@mdi/js': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['@mdi/js']
          },
          '@mdi/react': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['@mdi/react']
          },
          i18next: {
            // eager: true,
            singleton: true,
            requiredVersion: deps['i18next']
          },
          'react-i18next': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-i18next']
          },
          'react-simple-animate': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-simple-animate']
          },
          typestyle: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.typestyle
          },
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react
          },
          'react-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-dom']
          },
          'react-router-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-router-dom']
          }
        }
      ]
    }),
    new Dotenv({
      path: './src/environments/stg.env'
    })
  ]
};

module.exports = merge(commonConfig, stgConfig);
