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
        }, {
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