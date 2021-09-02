var express = require('express');
var app = express();
var login = require('./controllers/loginController');
var cloud = require('./controllers/cloudController');
var downloads = require('./controllers/downloadController');
var session = require('express-session');
var middlewares = require('./middlewares/session');

app.set('view engine','jade');
app.use('/assets',express.static('assets'));
app.use('/filespaths',express.static('filespaths'));
app.use(session({
	secret: '123456789',
	resave: false,
	saveUninitialized: false
}));


app.get("/",function(req,res){
	res.render("index");
});

app.use('/jcloud',middlewares.no_session);

app.use('/login',login);
app.use('/jcloud',cloud);
app.use('/downloads',downloads)

app.listen(8080);