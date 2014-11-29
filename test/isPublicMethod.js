var assert = require('assert');
var arr = [require('jquery')];
var isPublicMethod = require('../src/isPublicMethod');

describe('isPublicMethod', function () {

	it('should return boolean', function () {
		var a = isPublicMethod.apply(this, arr);
		assert.equal(typeof(a), 'function');
		assert.equal(typeof(a()), 'boolean');
	});

	it('should return true if value exists in array', function () {
		var arr1 = [].concat(arr); arr1.push(['foo','bar','baz']);
		var a = isPublicMethod.apply(this, arr1);
		assert.equal(a('foo'), true);
	});

	it('should return false if value doesn’t exist in array', function () {
		var arr1 = [].concat(arr); arr1.push(['foo','bar','baz']);
		var a = isPublicMethod.apply(this, arr1);
		assert.equal(a('bad'), false);
	});

});
