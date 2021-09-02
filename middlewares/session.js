var session = function(req,res,next){
	if(req.session.user)
		res.redirect('/login');
	else
		return true;
}
var no_session = function(req,res,next){
	if(!req.session.user)
		res.redirect('/login');
	else
		next();
}
module.exports.session = session;
module.exports.no_session = no_session;