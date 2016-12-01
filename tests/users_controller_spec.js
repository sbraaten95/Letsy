var expect = require('chai').expect;
var sinon = require('sinon');
var users = require('../server/controllers/users.js');
var mongoose = require('mongoose');

describe('users controller', function() {
	it('exists as an object', function() {
		expect(users).to.be.an.instanceof(Object);
	});
});