var connect = require('./connect');
var mongoose = connect.mongoose;
var Schema = connect.Schema;

var user_schema = new Schema({
	name: {type: String,
		required: "El nombre es necesario para poder compartir tu cuenta con los demas usuarios",
		maxlength: [30, "Los caracteres maximos para el nombre del usuario es '30'"] 
	},
	email: {type: String,
		required: "El correo es el identificador de tu cuenta, sin el no tendrias acceso a tu cuenta"
	},
	password: {type: String,
		required: "La contraseña es indispensable para protejer tu cuenta",
		maxlength: [15,"Los caracteres maximos para la contraseña es de '15' caracteres"],
		validate: {
			validator: function(p){
				return this.password_confirmation == p;
			},
			message: "Las contraseñas no coinciden"
		}
	},
	folders: {type: Object}
});

user_schema.virtual("password_confirmation").get(function(){
	return this.pass_confirmation;
}).set(function(value){
	this.pass_confirmation = value;
});

var User = mongoose.model('User',user_schema);

module.exports = User;