const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'as.js'
    }, plugins: [new htmlwebpackplugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })]
    , module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader',
                'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader',
                'css-loader',
                'less-loader']
        }, {
            test: /\.html$/,
            use: 'html-loader'
        },{
            test: /\.(png|jpg|gif|ttf)$/,
            use: [
                    // 大约小于10kb的图片变成base64编码继承到js中，比较大的图片仍然以url方式引入
                    { loader: 'url-loader', options: { limit: 10000 } }
                    // 'image-webpack-loader'
                ]
        },{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            exclude: /(node_modules)|(bower_components)/
        },{
        test: /\.vue$/,
        use: 'vue-loader'
        
    }]
    }
}