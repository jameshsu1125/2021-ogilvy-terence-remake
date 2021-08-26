const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const Folder = 'bundle'; // 自動產生檔案的folder
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Meta = require('./template/template.meta');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { NODE_ENV } = process.env;

module.exports = () => {
	const setting = {
		mode: NODE_ENV || 'development',
		target: NODE_ENV !== 'production' ? 'web' : 'browserslist',
		entry: {
			index: './src/index.jsx', // 認識林宗緯
			introduction: './src/introduction.jsx', // 實習計畫介紹
			how: './src/how.jsx', // 如何申請
			experience: './src/experience.jsx', // 受獎助者
			admin: './src/admin.jsx', // 編輯歷屆紅領帶
		},
		module: {
			rules: [
				{ test: /\.jsx?$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }] },
				{
					test: /\.(less|css)$/,
					use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
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
			filename: `${Folder}/js/[name].min.js`,
			publicPath: NODE_ENV === 'production' ? './' : '/',
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: { src: path.resolve(__dirname, 'src/') },
		},
		plugins: [
			new HotModuleReplacementPlugin(),
			new Dotenv({
				path: path.resolve(__dirname, '.env'), // use .env variable as the local dev environment
				allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
				systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
				defaults: true, // load '.env.defaults' as the default values if empty.
			}),
			new CopyPlugin({
				patterns: [{ from: 'public' }],
			}),
			new CleanWebpackPlugin(),
		],
		devtool: NODE_ENV === 'production' ? false : 'cheap-module-source-map',
		devServer: {
			contentBase: './dist',
			disableHostCheck: true,
			port: 8080,
			hot: true,
			host: '0.0.0.0',
			https: false,
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
