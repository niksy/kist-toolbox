var assert = require('assert');
var appendClass = require('../lib/append-class');

describe('append-class', function () {

	it('should return concatenated string', function () {
		var a = appendClass({
			foo: 'foo',
			bar: 'bar'
		});
		assert.equal(a('foo','bar'), 'foo bar');
		assert.equal(a('bar','barbarbar baz'), 'bar barbarbar baz');
	});

});
