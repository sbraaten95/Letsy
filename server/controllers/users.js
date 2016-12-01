var mongoose = require('mongoose');
var User = mongoose.model('User');
var Investment = mongoose.model('Investment');

function UsersController() {
	this.index=(req,res) => {
		User.find({}, (err, users) => {
			if (err) {
				console.log(err);
			} else {
				res.json(users);
			}
		});
	};
	this.create=(req,res)=>{
		var newUser = new User(req.body);
		newUser.save((err, user) => {
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		});
	};
};

module.exports = new UsersController();