var Sequelize = require('sequelize');
var db = new Sequelize('database', 'username', 'password');

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
  address: Sequelize.STRING,
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER
});

// The join table
var Attendees = db.define('Attendees');

// Adds the attribute creatorId to the Session model
// Session.prototype will gain the methods session.getUser() and session.setUser()
Session.belongsTo(User, {foreignKey: 'creatorId', targetKey: 'id'});

// Injects userId and sessionId into Attendees table
// This will add methods: 
  // to User: getSessions, setSessions, addSession, addSessions
  // to Session: getUsers, setUsers, addUser, addUsers
User.belongsToMany(Session, { through: 'Attendees', foreignKey: 'userId' });
Session.belongsToMany(User, { through: 'Attendees', foreignKey: 'sessionId' });

// Model syncs are chained with promises in this order because the Session model requires
// foreign id injection from User, and Attendees requires foreign id injections from User and Session
User.sync().then(function() {
  Session.sync().then(function() {
    Attendees.sync().then(function() {
     
    });
  });
});
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

module.exports = {
  sessions: {
    getUserSessions: function() {
        // do sequalize here 
        //return Session.findAll({ include: [ {model: User} ] });

    }
  },

  user: {
    signUp: function(user) {
      var username = user.username;
      var password = user.password;
      return User.findOrCreate({where: {username: username}, defaults: {username: username, password: password}});
    },

    signIn: function(user) {
      var username = user.username;
      var password = user.password; 
      return User.findOne({where: {username: username, password: password}});
    }
  }
};
