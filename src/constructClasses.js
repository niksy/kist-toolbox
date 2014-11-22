/* jshint maxparams:false */

/**
 * @param  {Object} $
 * @param  {Object} defaultClasses
 * @param  {Object} customClasses
 * @param  {String} defaultNs
 * @param  {String} customNs
 *
 * @return {Object}
 */
function fn ( $, defaultClasses, customClasses, defaultNs, customNs ) {

	defaultClasses    = defaultClasses || {};
	customClasses     = customClasses || {};
	defaultNs         = defaultNs || '';
	customNs          = customNs ? $.trim(customNs) : '';

	classesComplete   = {};
	classesOnlyLastNs = {};

	$.each(defaultClasses, function ( name, className ) {

		var classReplacedNs   = customNs ? className.replace(defaultNs, customNs) : className;

		var classNameCustomNs = '';
		var classOnlyLastNs   = className;
		var classComplete     = className;

		if ( classReplacedNs !== className ) {
			classNameCustomNs = classReplacedNs;
			classOnlyLastNs = classReplacedNs;
			classComplete = className + ' ' + classNameCustomNs;
		}

		if ( customClasses[name] ) {
			classComplete = customClasses[name]
								.replace(/\{customNsClass\}/g,classNameCustomNs || '{baseClass}')
								.replace(/\{baseClass\}/g,className);
		}

		classesOnlyLastNs[name] = classOnlyLastNs;
		classesComplete[name] = $.trim(classComplete);

	});

	return {
		classes: classesComplete,
		classesNs: classesOnlyLastNs
	};

}

module.exports = function ( $ ) {
	return $.proxy(fn, this, $);
};
