module.exports = {
  entry: './app/App.js',
  output: {
    path: '/',
    filename: 'public/index.js'
  },
  devServer: {
    port: 3333,
    inline: true
  },
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_module/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}
