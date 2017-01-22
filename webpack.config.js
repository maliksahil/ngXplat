module.exports = {
    entry: "./www/app/main",
    output: { filename: "./www/dist/bundle.js"},
    module: {
        loaders: [
            {
                test: /ts$/,
                loader: "ts-loader"
            },
            {
                test: /html$/,
                loader: "html-loader"
            },
            {
                test: /css$/,
                loader: "css-loader"
            }                        
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html", ".css"]
    },
    devtool: "#inline-source-map"
}