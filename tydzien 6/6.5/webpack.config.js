const {
    resolve
} = require("path");

module.exports = {
    entry: "./scripts.js",
    output: {
        path: resolve(__dirname + "/dist/"), //sciezka absolutna do katalogu wynikowego
        filename: "bundle.js"
    },
    module: {
        rules:[
            { // jedna reguła
                test:/\.js$/,  // przepuszczaj przez loader babel tylko pliki js
                exclude: /node_modules/, // wyklucz pliki pobierane z katalogu node_modules, bo nie potrzebują transpilacji
                use: {
                    loader: "babel-loader", // czego dotyczy ta reguła
                    options: {
                        presets: ["es2015"]
                    }
                }

            }
        ]
    }

}
