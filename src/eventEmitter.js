/* jshint maxparams:false */

var $ = require('jquery');

/**
 * @param  {Object} plugin
 *
 * @return {Function}
 */
module.exports = function ( plugin ) {

	/**
	 * @param  {Object}   plugin
	 * @param  {Object}   ctx
	 * @param  {String}   eventName
	 * @param  {Array}    data
	 * @param  {jQuery}   triggerEl
	 */
	return function ( ctx, eventName, data, triggerEl ) {
		var el = (ctx.dom && ctx.dom.el) || ctx.$el || $({});
		plugin = plugin || {};
		if ( ctx.options[eventName] ) {
			ctx.options[eventName].apply((el.length === 1 ? el[0] : el.toArray()), data);
		}
		(triggerEl || el).trigger((plugin.name + eventName).toLowerCase(), data);
	};

};
