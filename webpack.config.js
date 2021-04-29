const Folder = 'bundle'; // 自動產生檔案的folder
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Meta = require('./template/template.meta');
const path = require('path');
const { NODE_ENV } = process.env;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
	const setting = {
		// webpack5之後需要設定mode
		mode: NODE_ENV || 'development',

		// webpack bug: 設定了browserlistrc後hot就失效了 => https://youtu.be/TOb1c39m64A?t=2293
		target: NODE_ENV !== 'production' ? 'web' : 'browserslist',

		// 需要更多頁面時可以新增
		entry: {
			index: './src/index.jsx',
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

		// file-loader輸出規則
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: `${Folder}/js/[name].min.js`,
		},

		/**
		 * extensions : 沒副檔名時自動補齊
		 * alias : 指向根目錄 ex import '../../../Components/*' => 'root/Components/*'
		 */
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: { root: path.resolve(__dirname, 'src/') },
		},

		plugins: [],

		/**
		 *  false : 輸出用 => 檔案最小,沒有source-map
		 *	cheap-module-source-map: 開發用 => console行數正確,但是很慢
		 *  eval :  檔案很大,速度最快
		 *  ? => https://webpack.js.org/configuration/devtool/
		 *  ! => webpack 5需要觀察
		 */
		devtool: NODE_ENV === 'production' ? false : 'cheap-module-source-map',

		/**
		 * contentBase: server根目錄
		 * disableHostCheck: true => 某些機制需要多開port互聯時,將不檢查host
		 * port: 怕ducker相衝突 特別拉出來
		 * hot: 改code自動reload
		 * host: 0.0.0.0 用ip(手機)可以直接測
		 * https: 要測FB等app可以用https 但是要略過安全性畫面
		 */
		devServer: {
			contentBase: './dist',
			disableHostCheck: true,
			port: 8080,
			hot: true,
			host: '0.0.0.0',
			https: false,
		},
	};

	// html-webpack-plugin 設定 => 每一個entry用同一個js(chunk)
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

	if (NODE_ENV === 'production') {
		// 移除 dist裡全部東西 除了dev folder
		setting.plugins.push(new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['!img'] }));
	}

	return setting;
};
