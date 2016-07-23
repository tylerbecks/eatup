var model = require('../models/db.js');

module.exports = { 
	users: { 
		signUp: function(req, res) { 
			console.log('im here');
			var user = req.body; 
			model.user.signUp(user)
				.then(results => {
					console.log(results);
				})
				.catch(error => {
					console.log(error);
				});
		}, 

		signIn: function(req, res) {
			var user = req.body; 
			model.user.signIn(user)
				.then(results => {
					console.log(results);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
}