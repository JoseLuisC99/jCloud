var express = require('express');
var fs = require('fs');
var multiparty = require('connect-multiparty');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/User');
var File = require('../models/File');

router.use(bodyParser.urlencoded({extended: false}));
router.use(multiparty());

// RUTAS DEL DISCO VIRTUAL
router.get("/myCloud",function(req,res){
	var files;
	File.find({user: req.session.user.id, folder: "/"},function(error,data){
		if(error || data == null)
			files = [];
		else
			files = data;
		res.render('jcloud/index',{user: req.session.user.name,
			email: req.session.user.email,
			folders: req.session.user.folders,
			files: files,
			dir: "/"
		});
	});
});
router.get("/myCloud/:folder",function(req,res){
	var files;
	File.find({user: req.session.user.id, folder: req.params.folder},function(error,data){
		if(error || data == null)
			files = [];
		else
			files = data;
		res.render('jcloud/index',{user: req.session.user.name,
			email: req.session.user.email,
			folders: req.session.user.folders,
			files: files,
			dir: req.params.folder
		});
	});
});
// #############################################

// RUTAS DE USER-CONGIG Y API's
router.get("/config",function(req,res){
	res.render('jcloud/config',{user: req.session.user.name,
		folders: req.session.user.folders,
		email: req.session.user.email});
});

router.get("/developers",function(req,res){
	res.render('jcloud/developers',{user: req.session.user.name,
		folders: req.session.user.folders,
		email: req.session.user.email});
});
// #############################################

// RUTAS DE NEW
router.post('/new/folder',function(req,res){
	var dir = 'filespaths/' + req.session.user.id + '/' + req.body.nameFolder;
	fs.mkdir(dir,function(error){
		if(error){
			res.send('Al parecer hubo un error: ' + error);
			return false;
		}else{
			req.session.user.folders.push(req.body.nameFolder);
			User.findByIdAndUpdate(req.session.user.id,{folders: req.session.user.folders},function(error,data){
				if(data == null){
					res.send('Error: ' + error);
					return false;
				}
				res.redirect('/jcloud/myCloud');
			});
		}
	});
});
router.post('/new/file',function(req,res){
	var tempFile = req.files.file.path;
	if(req.body.folder == "/")
		var newFile = "C:/jCloud/filespaths/" + req.session.user.id + "/" + req.files.file.name;
	else
		var newFile = "C:/jCloud/filespaths/" + req.session.user.id + "/" + req.body.folder + "/" + req.files.file.name;
	fs.rename(tempFile, newFile, function(error){
		if(error){
			res.send('Al parecer hubo un error: ' + error);
			return false;
		}else{
			var file = new File({
				name: req.body.name,
				access: req.body.access,
				folder: req.body.folder,
				user: req.session.user.id,
				size: req.body.size,
				type: req.body.type,
				last: req.body.lastModified,
				mime: req.body.mime,
				date: req.body.date,
				key: req.body.key
			});
			file.save().then(function(data){
				console.log(data);
				res.redirect('/jcloud/myCloud');
			},function(error){
				console.log('Error: ' + error);
				res.send('Error!.');
			});
		}
	});
});
// #############################################

module.exports = router;