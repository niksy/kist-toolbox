var assert = require('assert');
var runPlugin = require('../src/runPlugin')('Foo');

describe('runPlugin', function () {

	describe('basic', function () {

		it('should return object and object should be instance of jQuery', function () {
			var a = runPlugin();
			assert.equal(typeof(a), 'object');
			assert.equal(a instanceof $, true);
		});

		it('should create data property with name "Foo" and it’s value be instance of constructor method', function () {
			var el = $({});
			runPlugin(el);
			assert.equal(typeof($.data(el[0], 'Foo')), 'object');
		});

	});

	describe('custom props', function () {

		var el, spy;

		beforeEach(function () {
			spy = 0;
			el = $({});
			runPlugin(el, {
				'bar': function () {
					spy++;
				},
				'baz': 42
			}, function ( el, options ) {
				$.extend(this, options);
			});
		});

		it('returned object should have custom props', function () {
			var a = $.data(el[0], 'Foo');
			assert.equal(typeof(a.bar), 'function');
			assert.equal(a.baz, 42);
		});

		it('returned object should have runnable methods', function () {
			var a = $.data(el[0], 'Foo');
			a.bar();
			assert.equal(spy, 1);
		});

		it('passed string should activate method on object if instance and method exist', function () {
			runPlugin(el, 'bar');
			assert.equal(spy, 1);
		});

		it('passed string should activate method on object if instance and method exist', function () {
			runPlugin(el, 'bar', function () { return spy++; });
			assert.equal(spy, 2);
		});

	});

});
