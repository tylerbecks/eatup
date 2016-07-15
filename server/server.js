//setting up basic server
var express = require('express');

var app = express();


app.listen(3000,  function() {
  console.log('listening on ' + 3000);
});