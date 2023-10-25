const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("node:path")

module.exports = {
	entry: "./src/app.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html")
		})
	],
	devServer: {
		proxy: {
			'/api': {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
				pathRewrite: { '^/api': '' },
			},
		},
	},
}

// fetch('/api/users')