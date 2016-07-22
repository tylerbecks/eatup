var EatUpController = require('../controllers/eatUps.controller.js');
var router = require('express').Router();


router.get('/sessions/allSessions', EatUpController.sessions.getAll);

router.get('/sessions/userSessions', EatUpController.sessions.getUserSessions);


module.exports = router;
