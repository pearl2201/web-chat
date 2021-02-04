const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const devServer = require('@neutrinojs/dev-server');
const eslint = require('@neutrinojs/eslint');
const htmlTemplate = require('@neutrinojs/html-template');
const copy = require('@neutrinojs/copy');
const { basename, join } = require('path');
const path = require('path');
const { resolve } = require('path');
const babelMerge = require('babel-merge');
const compileLoader = require('@neutrinojs/compile-loader');
const { merge } = require('@neutrinojs/compile-loader');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    (neutrino) => {
			neutrino.use(
				eslint({
					eslint: {
						useEslintrc: true
					}
				})
			);
		},
    react({
      html: {
        title: 'chat'
      }
    }),
    jest(),
    htmlTemplate({
			// @neutrinojs/html-template includes a custom template that has more features
			// (eg appMountId and lang support) than the default html-webpack-plugin template:
			// https://github.com/jantimon/html-webpack-plugin/blob/master/default_index.ejs
			template: 'index.ejs',
			appMountId: 'root',
			lang: 'en',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			// Override pluginId to add an additional html-template plugin instance
			pluginId: 'html',
			title: 'Kyx Portal'
		}),
		(neutrino) => {
			neutrino.use(
				copy({
					patterns: [
						{
							context: join(neutrino.options.source, '../public'),
							from: '**/*',
							to: ''
						}
					]
				})
			);
		},
		devServer({
			port: 6031,
			https: true,
			hot: true,
			open: false,
			// Redirect 404s to index.html, so that apps that use the HTML 5 History API work.
			historyApiFallback: true,
			// Only display compile duration and errors/warnings, to reduce noise when rebuilding.
			stats: {
				all: false,
				errors: true,
				timings: true,
				warnings: true
			}
		})
  ],
};
