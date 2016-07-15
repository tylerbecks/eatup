var Sequelize = require('sequelize');
var db = new Sequelize('dbeatup', 'root');

var Users = db.define('Users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Sessions = db.define('Sessions', {
  sessionname: Sequelize.STRING,
  latitude: Sequelize.NUMBER,
  longitude: Sequelize.NUMBER
});

Sessions.hasMany(Users);
Users.belongsTo(Sessions);
