var expect = require('chai').expect;
var sinon = require('sinon');

describe('Mocha TDD Framework', function() {
	it('supports chai', function() {
		expect(2).to.be.above(1);
	});
	it('supports sinon', function() {
		var spy = sinon.spy();
		spy('Hello', 'World');
		expect(spy.firstCall.args).to.eql(['Hello', 'World']);
	});
});