var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  	firstName : String,
	lastName : String,
	isAdmin: Boolean,
	login: String,
	password: String,
	mail: String,
  	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
