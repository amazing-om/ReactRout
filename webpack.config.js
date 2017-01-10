module.exports = {
	entry:"./src/index",
	output:{
		path: __dirname+"/dist",
		filename: "app.js"
	},
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
				loader: "babel",
				//exclude: /node_modules/,
				query: {
					presets: [
						'es2015', 'react'
							// require.resolve("babel-preset-react"),
							// require.resolve("babel-preset-es2015"),
							// require.resolve("babel-preset-stage-2")
						]
				}
			}
		]
	}
};