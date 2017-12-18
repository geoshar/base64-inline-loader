'use strict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =
	{
		entry: {
			index: './tests/fixtures/index.css'
        },

		output: {
			path: path.resolve(__dirname, 'cache'),
			filename: '[name].js'
		},

		plugins: [
			new CleanWebpackPlugin(['cache'], {
				verbose: true
			}),

			new ExtractTextPlugin('index.css'),
            new webpack.LoaderOptionsPlugin({
                debug: true
            })
		],

		module: {
			rules: [
				{
					test: /\.(png|woff)$/,
					loader: path.join(__dirname, '../index.js'),
					query: {
						limit: 1000,
						name: '[name].[ext]'
					}
				},

				{
					test: /\.css$/,

					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				}
			]
		}
	};
