var express 		= require('express');
var router 			= express.Router();
var csrf 			= require('csurf');
var passport 		= require('passport');

var csrfProtection  = csrf();
router.use(csrfProtection);

router.get('/signup', function(req, res, next){
  var messages = req.flash('error');
	res.render('users/signup', {csrfToken : req.csrfToken(), messages : messages, hasErrors : messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
	successRedirect : '/user/profile', 
	failureRedirect : '/user/signup',
	failureFlash	: true
}));

router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('users/signin', {csrfToken : req.csrfToken(), messages : messages, hasErrors : messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect : '/user/profile', 
  failureRedirect : '/user/signin',
  failureFlash  : true 
}));

router.get('/profile', isLoggedIn, function(req, res, next){
	res.render('users/profile');
});

router.get('logout', function(req, res, next){
	req.logout();   		// passport method
	res.redirect('/');
});


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){ // method of passport
		return next();
	}
	res.redirect('/');
}



module.exports = router;