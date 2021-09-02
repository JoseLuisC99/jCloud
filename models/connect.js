var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/jCloud");

var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;