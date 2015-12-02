module.exports = {
    entry: "./entry.js",
    output: {
        path: './public/javascripts',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};