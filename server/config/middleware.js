var morgan = require('morgan');
var bodyParser = require('body-parser');


module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static('client'));
};
