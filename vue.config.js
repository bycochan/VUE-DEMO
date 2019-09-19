module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer:{
      host:'10.74.158.27',
      port:1996,
      open:true,
      // proxy:{
      //   '/getImages':{
      //     target:"https://www.apiopen.top", 
      //     secure: true, 
      //     changeOrigin: true,
      //     pathRewrite:{
      //       '^/getImages': '/'  //通过pathRewrite重写地址，将前缀/api转为/
      //     }
      //   }
      // }
           
      
  },
      configureWebpack: (config) => {
        config.module.rules.push({
          test: /\.md$/,
          use: [{
            loader: 'html-loader'
          }, {
            loader: 'markdown-loader',
          }]
        })
      }
  };
  