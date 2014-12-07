/* jshint maxparams:false */

var $ = require('jquery');

/**
 * @param  {Object} defaultClasses
 * @param  {Object} customClasses
 * @param  {String} defaultNs
 * @param  {String} customNs
 *
 * @return {Object}
 */
module.exports = function ( defaultClasses, customClasses, defaultNs, customNs ) {

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
		var classesList       = [];
		var customClass       = customClasses[name];

		if ( classReplacedNs !== className ) {
			classNameCustomNs = classReplacedNs;
			classOnlyLastNs = classReplacedNs;
			classComplete = className + ' ' + classNameCustomNs;
		}

		if ( customClass ) {
			classComplete = customClass
								.replace(/\{customNsClass\}/g, classNameCustomNs || '{baseClass}')
								.replace(/\{baseClass\}/g, className);

			if ( !(/\{baseClass\}|\{customNsClass\}/g.test(customClass)) ) {
				classesList = customClass.replace(/\s{2,}/g,' ').split(' ');
				classOnlyLastNs = classesList[classesList.length-1];
			}
		}

		classesOnlyLastNs[name] = classOnlyLastNs;
		classesComplete[name] = $.trim(classComplete);

	});

	return {
		classes: classesComplete,
		classesNs: classesOnlyLastNs
	};

};
