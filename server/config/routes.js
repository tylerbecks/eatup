// var userController = require('../controllers/user.controller.js');
// var eatUpsController = require('../controllers/eatUps.controller.js');
// var router = require('express').Router();

// router.get('/messages', userController);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);

// module.exports = router;

module.exports = function(app, express) {

  // User controller
    // Create user function
    // SignIn user function
  // MeetUp controller
    // 

  //redirect to the login page
  app.get('/', function(req, res) {
    res.render('index');
  });

  // app.get('/login', function(req, res) {
  //   res.send('You are on the login page');
  // });

  // app.get('/signup', function(req, res) {
  //   res.send('You are on the signup');
  // });

  // app.post('/signup', function(req, res) {
  //   res.send('You are on the signup');
  // });

  // app.post('/createEatUp', eatUpCtrl.createOne);

  // app.post('/joinEatUp', function(req, res) {
  //   res.send('You are on the joinEatUp page')
  // });
  
  // app.get('*', function(req, res) {
  //   //Redirects them to index if they try to go anywhere else
  // });
};