//setting up basic server
var express = require('express');
var app = express();
var router = require('./config/routes.js');

require('./config/middleware.js')(app, express);
// require('./models/db.js');
app.use(router);

app.listen(3000, function() {
  console.log('listening on ' + 3000);
});