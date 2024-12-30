module.exports = {
  //关闭语法检查
  lintOnSave: false,
  //开启代理服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://124.222.106.130:7081/C8906x',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  publicPath: './'
}
