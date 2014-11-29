/**
 * @param  {String} name
 *
 * @return {Object}
 */
module.exports = function ( name ) {

	return {

		/**
		 * @param  {String} message
		 *
		 * @return {Error}
		 */
		error: function ( message ) {
			throw new Error(name + ': ' + message);
		}
	};

};
