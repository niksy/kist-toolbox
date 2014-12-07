var $ = require('jquery');

/**
 * @param  {String} name
 *
 * @return {Function}
 */
module.exports = function ( name ) {

	/**
	 * @param  {Object|String} options
	 * @param  {Function} method
	 *
	 * @return {jQuery}
	 */
	return function ( el, options, method ) {

		options = options || {};
		method  = method || $.noop;

		return (el || $()).each(function () {
			var instance = $.data(this, name);
			var Method;
			if ( $.type(options) === 'string' && instance ) {
				instance[options](method());
			} else if ( $.type(options) === 'object' && !instance ) {
				Method = method;
				$.data(this, name, new Method(this, options));
			}
		});

	};

};
