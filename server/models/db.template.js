var Sequelize = require('sequelize');
var db = new Sequelize('database_name', 'username', 'password');

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

var User = db.define('User', {
  username: {type: Sequelize.STRING, unique: true},
  password: {type: Sequelize.STRING}
});

var Session = db.define('Session', {
  sessionname: Sequelize.STRING,
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER
});

var Attendees = db.define('Attendees');

// Adds the attribute creatorId to the Session model
// Session.prototype will gain the methods session.getUser() and session.setUser()
Session.belongsTo(User, {foreignKey: 'creatorId', targetKey: 'id'});

// Creates a join table called Attendees
User.belongsToMany(Session, { through: 'Attendees', foreignKey: 'userId' });
Session.belongsToMany(User, { through: 'Attendees', foreignKey: 'sessionId' });

Attendees.sync();
User.sync();
Session.sync().then(function() {
  // User.create({
  //   username: 'John',
  //   password: 'Hancock'
  // }).then(function(user) {
  //   Session.create({
  //     sessionname: 'Hearth',
  //     latitude: 456,
  //     longitude: 129,
  //     creatorId: user.get('id')
  //   });
  // });


  // User.create({
  //   username: 'David',
  //   password: 'dentist'
  // });

  // User.findOne({
  //   where: {username: 'David'}
  // }).then(function(user) {
  //   Session.create({
  //     sessionname: 'Zimmy Food Truck',
  //     latitude: 456,
  //     longitude: 129,
  //     creatorId: user.get('id')
  //   });
  // });

  // User.findOne({
  //   where: {username: 'John'}
  // }).then(function(user) {
  //   Session.findOne({
  //     where: {id: 1}
  //   }).then(function(session) {
  //     Attendees.create({
  //       userId: user.get('id'),
  //       sessionId: session.get('id')
  //     });
  //   });
  // });
});
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.


exports.User = User;
exports.Session = Session;