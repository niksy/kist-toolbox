/**
 * @param  {Mixed} options
 *
 * @return {Object}
 */
module.exports = function ( options ) {
	return typeof(options) === 'object' ? options : {};
};
