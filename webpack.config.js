const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:"development",
    entry:"./src/script.js",

    devServer:{
        static:'./dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            title : "weather app",
            inject:'body'
        })
    ],
    output:{
        filename : "main.js",
        path : path.resolve(__dirname,"dist"),
        clean:true
    }
}
