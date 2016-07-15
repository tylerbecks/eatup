var Sequelize = require('sequelize');
var db = new Sequelize('dbeatup', 'root');

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Session = db.define('Session', {
  sessionname: Sequelize.STRING,
  latitude: Sequelize.NUMBER,
  longitude: Sequelize.NUMBER
});

// Adds the attribute creatorId to the Session model
// Session.prototype will gain the methods session.getCreator() and session.setCreator()
Session.belongsTo(User, {as: 'Creator'});

// Creates a join table called Attendees
User.belongsToMany(Session, { through: 'Attendees' });
Session.belongsToMany(User, { through: 'Attendees' });

User.sync();
Session.sync();
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.User = User;
exports.Session = Session;