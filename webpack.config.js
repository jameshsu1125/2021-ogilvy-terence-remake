const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Meta = require('./template/template.meta');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Folder = 'bundle';
const { NODE_ENV } = process.env;

module.exports = () => {
	const setting = {
		mode: NODE_ENV || 'development',
		target: NODE_ENV !== 'production' ? 'web' : 'browserslist',
		entry: {
			index: './src/index.js', // 認識林宗緯
			introduction: './src/introduction.js', // 實習計畫介紹
			how: './src/how.js', // 如何申請
			experience: './src/experience.js', // 受獎助者
			// admin: './src/admin.js', // 編輯歷屆紅領帶
		},
		module: {
			rules: [
				{ test: /\.jsx?$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }] },
				{
					test: /\.(less|css)$/,
					use: [
						'style-loader',
						{ loader: 'css-loader', options: { esModule: false } },
						'postcss-loader',
						'less-loader',
					],
				},
				{
					test: /\.(png|jpg|gif|svg)$/i,
					use: [
						{
							loader: 'file-loader',
							options: { name: `${Folder}/image/[path][name].[ext]`, context: 'src' },
						},
					],
				},
				{
					test: /\.(ogv|mp4)$/,
					use: [
						{
							loader: 'file-loader',
							options: { name: `${Folder}/video/[path][name].[ext]`, context: 'src' },
						},
					],
				},
				{
					test: /\.(wav|mp3)$/,
					use: [
						{
							loader: 'file-loader',
							options: { name: `${Folder}/audio/[path][name].[ext]`, context: 'src' },
						},
					],
				},
				{
					test: /\.(eot|woff|woff2|ttf)$/,
					use: [
						{
							loader: 'file-loader',
							options: { name: `${Folder}/font/[path][name].[ext]`, context: 'src' },
						},
					],
				},
			],
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: `${Folder}/js/[name].[hash].min.js`,
			publicPath: NODE_ENV === 'production' ? './' : '/',
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: { src: path.resolve(__dirname, 'src/') },
		},
		plugins: [
			new Dotenv({
				path: path.resolve(__dirname, '.env'),
				allowEmptyValues: true,
				systemvars: true,
				defaults: true,
			}),
			new CopyPlugin({
				patterns: [{ from: 'public' }],
			}),
			new CleanWebpackPlugin(),
		],
		/**
		 *  false : 輸出用 => 檔案最小,沒有source-map
		 *	cheap-module-source-map: 開發用 => console行數正確,但是很慢
		 *  eval :  檔案很大,速度最快
		 */
		devtool: NODE_ENV === 'production' ? false : 'cheap-module-source-map',
		devServer: {
			allowedHosts: 'all',
			port: 8080,
			host: '0.0.0.0',
			https: false,
		},
		performance: {
			hints: false,
		},
	};
	Object.keys(setting.entry).map((entry) => {
		setting.plugins.push(
			new HtmlWebpackPlugin({
				...Meta,
				template: 'template/template.html',
				filename: `${entry}.html`,
				chunks: [entry],
			}),
		);
	});
	return setting;
};
