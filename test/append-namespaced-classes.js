var assert = require('assert');
var appendNamespacedClasses = require('../lib/append-namespaced-classes');

describe('append-namespaced-classes', function () {

	it('should return namespaced classes', function () {
		var a = appendNamespacedClasses({
			foo: 'Foobar-foo',
			bar: 'Foobar-bar',
			baz: 'foobarbaz',
			bad: 'bad',
			bag: 'Foobar-bag'
		}, 'Foobar');

		assert.deepEqual(a('Barbaz'), {
			foo: 'Foobar-foo Barbaz-foo',
			bar: 'Foobar-bar Barbaz-bar',
			baz: 'foobarbaz',
			bad: 'bad',
			bag: 'Foobar-bag Barbaz-bag'
		});
	});

});
