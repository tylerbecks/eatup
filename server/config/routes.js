var EatUpController = require('../controllers/eatUps.controller.js');
var UserController = require('../controllers/user.controller.js');
var router = require('express').Router();


router.get('/sessions/allSessions', EatUpController.sessions.getAll);

router.get('/sessions/userSessions', EatUpController.sessions.getUserSessions);

// router.get('/SignUp', function(req, res) {
// 	console.log('here');
// 	res.redirect('/SignIn');
// });

router.post('/users/signUp', UserController.users.signUp);

router.post('/users/signIn', UserController.users.signIn);


module.exports = router;
