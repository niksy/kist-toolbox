var assert = require('assert');
var constructClasses = require('../src/constructClasses')(require('jquery'));

describe('constructClasses', function () {

	it('should return object', function () {
		var cc = constructClasses();
		assert.equal(typeof(cc), 'object');
		assert.deepEqual(cc, {classes: {}, classesNs: {}});
	});

	it('should return classes with default namespace', function () {

		var cc = constructClasses({
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		});

		assert.deepEqual(cc.classes, {
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		});

		assert.deepEqual(cc.classesNs, {
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		});

	});

	it('should return classes with default namespace and custom namespace', function () {

		var cc = constructClasses({
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		}, {}, 'Foobar', 'Barbaz');

		assert.deepEqual(cc.classes, {
			foo: 'Foobar-bar Barbaz-bar',
			bar: 'Foobar-baz Barbaz-baz',
			baz: 'Foobar-bad Barbaz-bad',
			isBaz: 'is-bad'
		});

		assert.deepEqual(cc.classesNs, {
			foo: 'Barbaz-bar',
			bar: 'Barbaz-baz',
			baz: 'Barbaz-bad',
			isBaz: 'is-bad'
		});

	});

	it('should return classes with default namespace when using custom classes', function () {

		var cc = constructClasses({
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		}, {
			foo: '{baseClass}',
			bar: '{customNsClass} Badfoo',
			isBaz: '{baseClass} Barbaz {customNsClass}'
		}, 'Foobar');

		assert.deepEqual(cc.classes, {
			foo: 'Foobar-bar',
			bar: 'Foobar-baz Badfoo',
			baz: 'Foobar-bad',
			isBaz: 'is-bad Barbaz is-bad'
		});

		assert.deepEqual(cc.classesNs, {
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		});

	});

	it('should return classes with default namespace and custom namespace when using custom classes', function () {

		var cc = constructClasses({
			foo: 'Foobar-bar',
			bar: 'Foobar-baz',
			baz: 'Foobar-bad',
			isBaz: 'is-bad'
		}, {
			foo: '{baseClass}',
			bar: '{customNsClass} Badfoo',
			isBaz: '{baseClass} Barbaz {customNsClass}'
		}, 'Foobar', 'Barbaz');

		assert.deepEqual(cc.classes, {
			foo: 'Foobar-bar',
			bar: 'Barbaz-baz Badfoo',
			baz: 'Foobar-bad Barbaz-bad',
			isBaz: 'is-bad Barbaz is-bad'
		});

		assert.deepEqual(cc.classesNs, {
			foo: 'Barbaz-bar',
			bar: 'Barbaz-baz',
			baz: 'Barbaz-bad',
			isBaz: 'is-bad'
		});

	});

});
