var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var User = require('../models/User');

router.use(bodyParser.urlencoded({extended: false}));

// RUTAS DE LOGIN
router.get("/",function(req,res){
	res.render('./login/index');
});
router.post("/",function(req,res){
	User.findOne({email: req.body.email, password: req.body.password},function(error,data){
		if(data==null){
			res.render('./login/index',{error: "El usuario o la contraseña son incorrectos."});
			return false;
		}
		req.session.user = {
			id: data._id,
			name: data.name,
			email: data.email,
			folders: data.folders
		};

		res.redirect('/jcloud/myCloud');
	});
});
// #############################################

// RUTAS DE SIGNUP
router.get("/signup",function(req,res){
	res.render("./login/signup");
});
router.post("/signup",function(req,res){
	User.findOne({email: req.body.email},function(error,data){
		if(data!=null){
			res.render("./login/signup",{error: "El correo " + req.body.email + " ya a sido registrado por otro usuario."});
			return false;
		}
	});
	var new_user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		password_confirmation: req.body.password_r,
		folders: [""]
	});
	new_user.save().then(function(data){
		req.session.user = {
			id: data._id,
			name: data.name,
			email: data.email,
			folders: data.folders
		};
		var dir = 'filespaths/' + data._id;
		fs.mkdir(dir,function(error){
			if(error){
				res.send('Al parecer hubo un error: ' + error);
				return false;
			}else{
				res.redirect('/jcloud/myCloud');
			}
		});
	},function(error){
		res.render("./login/signup",{error: error});
	});
});
// #############################################

module.exports = router;