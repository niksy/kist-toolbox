var assert = require('assert');
var getOptions = require('../src/get-options');

describe('getOptions', function () {

	it('should return object', function () {
		assert.deepEqual(getOptions(), {});
		assert.deepEqual(getOptions({}), {});
		assert.deepEqual(getOptions('foo'), {});
		assert.deepEqual(getOptions({foo:1,bar:2}), {foo:1,bar:2});
	});

});
