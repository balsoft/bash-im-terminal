const iconv = require('iconv-lite');
const decode = require('parse-entities');
/**
 * Convert from one encoding to another one.
 *
 * @param {Buffer|String} body Content you want to convert, in binary format
 * @param {String} [from=win1251]
 * @returns {String} Returns converted string
 */
module.exports = function (body, from = 'win1251') {
  const buffer = Buffer.from(body, 'binary');
  return decode(iconv.decode(buffer, from));
};
