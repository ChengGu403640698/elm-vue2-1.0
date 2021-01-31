const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'development',
    entry:'/src/index.js',
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),new VueLoaderPlugin(),
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test:/\.(jpg|jpeg|png|bmp|svg)$/,
            loader:'url-loader',
            options:{
                //name: "[name].[ext]",
                limit: 2048
            }
        }]
    }
}