var assert = require('assert');
var err = require('../src/throw-error')('Foo');

describe('throwError', function () {

	it('should return function', function () {
		assert.equal(typeof(err), 'function');
	});

	it('should throw error', function () {
		assert.throws(err, Error);
	});

	it('should throw error with message "Foo: bar"', function () {
		assert.throws(function () {
			err('bar');
		}, /Foo: bar/);
	});

});
