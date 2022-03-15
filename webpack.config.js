const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // file nguồn gốc
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    }, // file bó
    mode: 'development',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
    },
    watch: false, // tự động thay đổi khi cập nhật các file khác
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ], // tự động tạo ra file index.html
    
}