var model = require('../models/db.js');

var tempData = [{creatorID: 'Dan', location: 'HackReactor'},
                {creatorID: 'Brian', location: 'Subway'},
                {creatorID: 'Dog', location: 'House'},
                {creatorID: 'Neil', location: 'Yerba Buena'},
                {creatorID: 'Henry', location: 'Oasis'},
                {creatorID: 'Sunny', location: 'FatBurger'}]


module.exports = {

  sessions: {
    getAll: function(req, res) {
      //Temp data just to make sure it works
      // model.sessions.getAllSessions();
      res.send(tempData);
    },
    getUserSessions: function(req, res) {
      //Temp data just to make sure it works
      res.send(tempData);

      // model.sessions.getUserSessions().then(function(data){
      //   res.end();
      // });
    }
  }
}

