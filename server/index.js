require('ignore-styles')
require("babel-polyfill");
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server')