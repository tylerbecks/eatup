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
			res.send(tempData);
      // model.sessions.getAll()

		},

		getUserSessions: function(req, res) {
			res.send(tempData);

			//model.sessions.getUserSessions()
		}





	}
};