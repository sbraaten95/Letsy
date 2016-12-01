var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	investments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Investment'}],
});

var User = mongoose.model('User', UserSchema);