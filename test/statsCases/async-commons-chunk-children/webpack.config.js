var webpack = require("../../../");

module.exports = {
    entry: {
        app: './index'
    },
	output: {
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            async: 'shared',
            children: true
		})
	]
};
