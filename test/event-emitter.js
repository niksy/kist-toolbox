var assert = require('assert');
var eventEmitter = require('../src/event-emitter')('Foo');

describe('eventEmitter', function () {

	var spy1, spy2, ctx;

	beforeEach(function () {
		spy1 = 0;
		spy2 = '';
		ctx = undefined;
	});

	it('should run callback', function () {

		var a = {
			options: {
				foo: function ( result ) {
					spy1++;
					spy2 = result;
					ctx = this;
				}
			}
		};

		eventEmitter(a, 'foo', ['baz']);

		assert.equal(spy1, 1);
		assert.equal(spy2, 'baz');
		assert.deepEqual(ctx, {});

	});

	it('should emit $ event', function () {

		var el = $({});
		var a = {
			options: {
				foo: function ( result ) {
					spy1++;
					spy2 = result;
					ctx = this;
				}
			}
		};

		el.on('foofoo foobar', function ( e, result ) {
			spy1++;
			spy2 += result;
		});

		eventEmitter(a, 'foo', ['baz'], el);
		eventEmitter(a, 'bar', ['bad'], el);

		assert.equal(spy1, 3);
		assert.equal(spy2, 'bazbazbad');
		assert.deepEqual(ctx, {});

	});

});
