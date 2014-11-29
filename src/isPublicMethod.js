var $ = require('jquery');

/**
 * @param  {Array} methods
 *
 * @return {Function}
 */
module.exports = function ( methods ) {

	/**
	 * @param  {Object} options
	 *
	 * @return {Boolean}
	 */
	return function ( options ) {
		return typeof(options) === 'string' && $.inArray(options, methods || []) !== -1;
	};

};
