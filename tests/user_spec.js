var expect = require('chai').expect;
var sinon = require('sinon');
var mongoose = require('mongoose');
var User = mongoose.model('User', new mongoose.Schema({name:String}));
var cleardb = require('mocha-mongoose')('mongodb://localhost/letsy')

describe('user model', function() {
	beforeEach(function(done) {
		if (mongoose.connection.db) return done();

		mongoose.connect('mongodb://localhost/letsy', done);
	})
	it('can be saved', function(done) {
		new User({name:"Scott"}).save(done);
	});
	it('can be retrieved', function(done) {
		new User({name:"Scott"}).save(function(err, user) {
			if (err) return done(err);
			User.findOne({name:"Scott"}, function(err, user) {
				if (err) return done(err);
				expect(user.name).to.eql("Scott");
				done();
			});
		});
	});
	it('can be updated', function(done) {
		new User({name:"Scott"}).save(function(err, user) {
			if (err) return done(err);
			User.update({_id: user._id}, {name: "David"}, function(err) {
				if (err) return done(err);
				User.findOne({name:"David"}, function(err, user) {
					if (err) return done(err);
					expect(user.name).to.eql("David");
					done();
				})
			});
		});
	});
});