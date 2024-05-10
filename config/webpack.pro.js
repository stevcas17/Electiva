const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

const proConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  module: {
    generator: {
      'asset/resource': {
        publicPath: 'https://www.goupagos.com.co/'
      }
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        portal: 'portal@https://www.goupagos.com.co/dale-portal-frontend-portal-enrollment/remoteEntry.js',
        qr: 'qr@https://www.goupagos.com.co/dale-portal-frontend-qr-mf/remoteEntry.js',
        reversetx: 'reversetx@https://www.goupagos.com.co/dale-portal-frontend-reverse-tx-mf/remoteEntry.js',
        link: 'link@https://www.goupagos.com.co/dale-pagos-frontend-links-pagos/remoteEntry.js',
        product_bond_gateway:
          'productbond_gateway@https://www.goupagos.com.co/dale-pasarela-frontend-product-bond-gateway/remoteEntry.js',
        // product_bond: 'productbond@https://www.goupagos.com.co/dale-pasarela-frontend-product-bond/remoteEntry.js',
        reports_dashboard:
          'reports_dashboard@https://www.goupagos.com.co/dale-pasarela-frontend-reports-dashboard/remoteEntry.js',
        account: 'account@https://www.goupagos.com.co/dale-pasarela-frontend-account-selection/remoteEntry.js',
        landingpage:
          'landingpage@https://www.goupagos.com.co/dale-pagos-frontend-links-pagos-landing-page/remoteEntry.js'
        // catalogue:
        //   'catalogue@https://www.goupagos.com.co/dale-pagos-frontend-links-pagos-catalogues-landing-page/remoteEntry.js'
        //
      }
    }),
    new Dotenv({
      path: './src/environments/pro.env'
    })
  ]
};

module.exports = merge(commonConfig, proConfig);
