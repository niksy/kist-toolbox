var $ = require('jquery');

/**
 * @param  {Object} classes
 *
 * @return {Function}
 */
module.exports = function ( classes ) {

	/**
	 * @param  {String} prop
	 * @param  {String} className
	 *
	 * @return {String}
	 */
	return function ( prop, className ) {
		return [classes[prop], className].join(' ');
	};
};
