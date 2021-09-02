var connect = require('./connect');
var mongoose = connect.mongoose;
var Schema = connect.Schema;

var file_schema = new Schema({
	name: {type: String,},
	size: {type: Number},
	type: {type: String},
	date: {type: String},
	user: {type: String},
	folder: {type: String},
	last: {type: String},
	mime: {type: String},
	access: {type: Boolean},
	key: {type: String}
});

var File = mongoose.model('File',file_schema);

module.exports = File;