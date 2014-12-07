var assert = require('assert');
var isPublicMethod = require('../src/is-public-method');

describe('isPublicMethod', function () {

	it('should return boolean', function () {
		var a = isPublicMethod();
		assert.equal(typeof(a), 'function');
		assert.equal(typeof(a()), 'boolean');
	});

	it('should return true if value exists in array', function () {
		var a = isPublicMethod(['foo','bar','baz']);
		assert.equal(a('foo'), true);
	});

	it('should return false if value doesn’t exist in array', function () {
		var a = isPublicMethod(['foo','bar','baz']);
		assert.equal(a('bad'), false);
	});

});
