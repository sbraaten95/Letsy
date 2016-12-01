var expect = require('chai').expect;
var sinon = require('sinon');
var server = require('../server.js');

describe('the server file', function() {
	it('exists', function() {
		expect(server).to.not.be.undefined;
	});
});