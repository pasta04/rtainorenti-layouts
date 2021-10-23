import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import merge from 'webpack-merge';
import globby from 'globby';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import nodeExternals from 'webpack-node-externals';

const isProduction = process.env.NODE_ENV === 'production';

const base: webpack.Configuration = {
	mode: isProduction ? 'production' : 'development',
	devtool: 'cheap-source-map',
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	plugins: [new HardSourceWebpackPlugin()],
};

const makeBrowserConfig = (name: string): webpack.Configuration => {
	const entry: webpack.Entry = {};
	const files = globby.sync(`./src/browser/${name}/views/*.tsx`);
	for (const file of files) {
		entry[path.basename(file, '.tsx')] = file;
	}

	const config: webpack.Configuration = {
		entry,
		output: {
			path: path.resolve(__dirname, name),
			filename: '[name].js',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loaders: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: [
									'babel-plugin-styled-components',
									'@babel/plugin-proposal-optional-chaining',
									'@babel/plugin-proposal-nullish-coalescing-operator',
								],
							},
						},
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
								configFile: path.resolve(
									__dirname,
									'src/browser/tsconfig.json',
								),
							},
						},
					],
				},
				{
					test: /\.(png|woff2?|webm|gif)$/,
					loader: 'file-loader',
					options: {name: '[name].[ext]'},
				},
				{
					test: /\.css$/,
					loaders: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localsConvention: 'camelCase',
								sourceMap: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			...Object.keys(entry).map(
				(entryName) =>
					new HtmlPlugin({
						filename: `${entryName}.html`,
						chunks: [entryName],
						title: entryName,
						template: `webpack/${name}.html`,
					}),
			),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
				analyzerMode: 'static',
				reportFilename: path.resolve(__dirname, `bundle-analyzer/${name}.html`),
			}) as any,
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					common: {minChunks: files.length},
					vendors: false,
					default: false,
				},
			},
		},
	};

	return merge(base as any, config as any) as any;
};

const extensionConfig = merge(base as any, {
	target: 'node',
	node: false,
	entry: path.resolve(__dirname, 'src/extension/index.ts'),
	output: {
		path: path.resolve(__dirname, 'extension'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					configFile: path.resolve(__dirname, 'src/extension/tsconfig.json'),
				},
			},
		],
	},
	externals: [nodeExternals()],
});

const config: webpack.Configuration[] = [
	makeBrowserConfig('dashboard'),
	makeBrowserConfig('graphics'),
	extensionConfig as any,
];

export default config;
