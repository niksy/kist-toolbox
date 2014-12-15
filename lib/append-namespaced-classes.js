var $ = require('jquery');

/**
 * @param  {Object} classes
 * @param  {String} defaultNs
 *
 * @return {Function}
 */
module.exports = function ( classes, defaultNs ) {

	/**
	 * @param  {String} ns
	 *
	 * @return {Object}
	 */
	return function ( ns ) {
		return $.extend.apply(null, $.map(classes, function ( val, key ) {
			var o = {};
			o[key] = $.trim([val, (val.indexOf(defaultNs) !== -1 ? val.replace(defaultNs, ns) : '')].join(' '));
			return o;
		}));
	};
};
