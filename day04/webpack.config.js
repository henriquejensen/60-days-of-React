module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8000',
	    './src/app.jsx'
	],
	output: {
		path: "public",
		publicPath: "/",
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 8000
	}
}