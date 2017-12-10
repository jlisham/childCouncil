var path=require('path');

module.exports={
  entry:"./app/assets/scripts/app.js",
  output:{
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "app.js"
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
