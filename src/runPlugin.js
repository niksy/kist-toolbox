/**
 * @param  {Object} $
 * @param  {String} name
 *
 * @return {Function}
 */
module.exports = function ( $, name ) {

	/**
	 * @param  {Object} options
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
			if ( instance && typeof(options) === 'string' ) {
				instance[options](method && method());
			} else {
				Method = method;
				$.data(this, name, new Method(this, options));
			}
		});

	};

};
