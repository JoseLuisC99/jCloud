var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var File = require('../models/File');

router.use(bodyParser.urlencoded({extended: true}));

router.get("/:file/:key",function(req,res){
	File.findOne({_id: req.params.file, key: req.params.key},function(error,data){
		if(data==null){
			console.log('No se ha encontrado el archivo');
			res.send('Error');
		}else{
			if(data.folder == "/")
				var route = "http://localhost:8080/filespaths/" + data.user + "/" + data.name;
			else
				var route = "http://localhost:8080/filespaths/" + data.user + "/" + data.folder + "/" + data.name;
			console.log(route);
			res.render("downloads/index",{route: route, file: data});
		}
	});
});

router.get("/:file",function(req,res){
	File.findOne({_id: req.params.file},function(error,data){
		if(data==null){
			console.log('No se ha encontrado el archivo');
			res.send('Error');
		}else{
			res.render("downloads/key",{file: data});
		}
	});
});

router.post("/:file",function(req,res){
	File.findOne({_id: req.params.file},function(error,data){
		if(data==null){
			console.log('No se ha encontrado el archivo');
			res.send('Error');
		}else{
			if(data.key == req.body.key){
				res.redirect('/downloads/' + req.params.file + "/" + req.body.key);
			}else{
				res.render("downloads/key",{file: data, error: "La clave de cifrado es incorrecta."});
			}
		}
	});
});

module.exports = router;