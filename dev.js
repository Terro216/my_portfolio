const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const path = require('path');
const port = 3000;
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/prod/index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}!`));