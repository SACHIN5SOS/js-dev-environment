//This file doesn't transpiled, som ust use CommonJs and ES5

//Register Bable to to transpile before our tests run
require('babel-register');

//Disabel Webpack feature that Mocha doen;t Understand
require.extensions['.css'] = function(){}