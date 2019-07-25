const path = require('path');

module.exports = {
  publicPath: '/',
  pages: {
    index: 'src/pages/index/main.js',
    // info: 'src/pages/info/main.js',
    // infoList: 'src/pages/infoList/main.js',
    // talk: 'src/pages/talk/main.js',
  },
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@a': path.resolve(__dirname, './src/assets'),
        },
      },
    });
  },
  devServer: {
    port: '8001',
    //api地址前缀
    proxy: {
      '/weixin': {
        target: 'http://smart.jilinjobswx.cn',
        changeOrigin: true,
        ws: true,
      },
    },
  },
};
