var assert = require('assert');
var constructOptions = require('../src/constructOptions');

describe('constructOptions', function () {

	it('should return object', function () {
		assert.deepEqual(constructOptions(), {});
		assert.deepEqual(constructOptions({}), {});
		assert.deepEqual(constructOptions('foo'), {});
		assert.deepEqual(constructOptions({foo:1,bar:2}), {foo:1,bar:2});
	});

});
