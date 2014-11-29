var assert = require('assert');
var log = require('../src/log')('Foo');

describe('log', function () {

	it('should return object', function () {
		assert.equal(typeof(log), 'object');
	});

	describe('error', function () {

		var a = log.error;

		it('should return function', function () {
			assert.equal(typeof(a), 'function');
		});

		it('should throw error', function () {
			assert.throws(a, Error);
		});

		it('should throw error', function () {
			assert.throws(function () {
				a('foo');
			}, /Foo: foo/);
		});

	});

});
