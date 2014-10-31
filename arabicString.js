/**
 * The percentage of Arabic letters in the `String`.
 *
 * Example:
 *
 *		'فوو bar'.howArabic()
 *		//=> 0.5
 *
 *
 * @returns {Float}
 * @api public
 */

String.prototype.howArabic = function () {

	var result, match, str = this

	// strip punctuation, digits and spaces
	str = str.replace(/[\u0021-\u0040\s]/gm, '')

	match = str.match(/[\u0621-\u0652]/gm) || []

	result =  match.length / str.length

	return result;
}

/**
 * The percentage of non-Arabic letters in the `String`.
 *
 * Example:
 *
 *		'فوو bar'.howNotArabic()
 *		//=> 0.5
 *
 *		'فوو bar'.howNotArabic()
 *		//=> 0.5
 *
 * 		'باز نورف'.howNotArabic()
 *		//=> 0.0
 *
 *
 * @returns {Float}
 * @api public
 */

String.prototype.howNotArabic = function () {

	var result, match, str = this

	// strip arabic letters , digits and spaces
	str = str.replace(!(/[\u0021-\u0040\s]/gm, ''))

	match = str.match(/[\u0621-\u0652]/gm) || []

	result =  match.length / str.length

	return result;
}


/**
 * Is the `String` Arabic, based on
 * a given `threshold` between `0` and `1`. Defaults to `0.79`.
 * 
 * Example:
 * 
 *		'فوو'.isArabic()
 *		//=> true
 *		'فوو bar baz'.isArabic(0.5)
 *		//=> flase
 *
 * @param {Float} [threshold=0.79]
 * @returns {Boolean}
 */
	
String.prototype.isArabic = function (threshold) {
	
	threshold = threshold || 0.79

	return this.howArabic() >= threshold;
}

/**
 * Does the `String` have _any_ Arabic letter.
 *
 * Example:
 *
 *		'فوو bar'.hasArabic()
 *		//=> ture
 *		'foo bar'.hasArabic()
 *		//=> false
 *
 *
 * @returns {Boolean}
 */
 
String.prototype.hasArabic = function () {

  return /[\u0621-\u064A]/.test(this);
}
