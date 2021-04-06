const path = require("path");
const webpack = require("webpack");

module.exports = (env)=> {

    const pack = require("./package.json");

    const production = !!(env && env.production === "true");
    const asmodule = !!(env && env.module === "true");
    const standalone = !!(env && env.standalone === "true");

    const config = {
        mode: production ? "production" : "development",
        entry: {
            app: "./client/app.ts"
        },
        output: {
            path: path.join(__dirname, "dist"),
            publicPath:"/dist/",
            filename: "[name].js",
            chunkFilename: "[name].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["./client", "node_modules"],
            mainFields: [ 'main' ],
            alias:{
                "jet-views":path.resolve(__dirname, "client/views"),
                "jet-locales":path.resolve(__dirname, "client/locales")
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION : production,
                BUILD_AS_MODULE : (asmodule || standalone)
            })
        ],
        devServer:{
            stats:"errors-only",
            contentBase:"./public/",
            proxy:{
                "/server" : "http://localhost:3000"
            }
        }
    };

    if (!production){
        config.devtool = "inline-source-map";
    }

    if (asmodule){
        if (!standalone){
            config.externals = config.externals || {};
            config.externals = [ "webix-jet" ];
        }

        const out = config.output;
        const sub = standalone ? "full" : "module";

        out.library = pack.name.replace(/[^a-z0-9]/gi, "");
        out.libraryTarget= "umd";
        out.path = path.join(__dirname, "dist", sub);
        out.publicPath = "/dist/"+sub+"/";
    }

    return config;
}