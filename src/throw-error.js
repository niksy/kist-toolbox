/**
 * @param  {String} name
 *
 * @return {Function}
 */
module.exports = function ( name ) {

	/**
	 * @param  {String} message
	 *
	 * @return {Error}
	 */
	return function ( message ) {
		throw new Error(name + ': ' + message);
	};

};
