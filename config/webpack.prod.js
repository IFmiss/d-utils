const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// css压缩打包相关
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 打包清除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    "index": './src/lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, './../dist'),
    publicPath: '',
    filename: '[name].js',
    libraryTarget: 'umd',
    // library: "Dutils"
  },
  module: {
    rules: [
      {
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				}
			},
    ]
  },
  plugins: [
    // 清除
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'dist')
    }),
    
    // css 压缩
    new OptimizeCssAssetsPlugin({}),

    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    namedModules: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
		// splitChunks: {
		// 	chunks: "all",
		// 	minSize: 30000,
		// 	minChunks: 1,
		// 	maxAsyncRequests: 5,
		// 	maxInitialRequests: 3,
		// 	name: true,
		// 	cacheGroups: {
		// 		default: {
		// 			minChunks: 2,
		// 			priority: -20,
		// 			reuseExistingChunk: true,
    //     },
		// 		vendors: {
		// 			test: /[\\/]node_modules[\\/]/,
    //       chunks: "initial",
    //       name: "vendor",
    //       priority: 10,
    //       enforce: true,
    //     },
    //     commons: {
    //       name: 'vendors',
    //       chunks: 'all',
		// 			minChunks: 2,
		// 			maxInitialRequests: 5, // The default limit is too small to showcase the effect
		// 			minSize: 0 // This is example is too small to create commons chunks
		// 		}
		// 	}
    // },
		minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      }),
    ]
	}
});