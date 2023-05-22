const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./sources/app.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    mode: "development",
    resolve: {
        alias: {
            "jet-views":path.resolve(__dirname, "sources/views"),
            "jet-locales":path.resolve(__dirname, "sources/locales")
        },
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            webix: "webix",
        }),
    ]
};
