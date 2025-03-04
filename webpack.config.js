const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/script.js",
    mode:"development",
    output:{
        filename:"bundle.js",
        clean:true,
        path:path.resolve(__dirname, "dist"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/SRCindex.html",
            inject:"body",
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
        ],
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["src/**/*.html"],
        static: "./dist",
        hot: true,  // Active le Hot Module Replacement
        liveReload: true,  // Recharge la page si un fichier statique change
    }
};