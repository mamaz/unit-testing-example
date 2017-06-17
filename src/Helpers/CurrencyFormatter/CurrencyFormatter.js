/**
 * Convert number to user defined delimiter separated currency format.
 * Default delimiter is dot.
 *
 * For instance 1000 will be converted to 1.000
 *
 *   100000 will be converted to 100.000, if delimiter is not specified.
 *
 * @param {number|string} number
 * @param {string} delimiter
 * @returns {string} - currency format
 */
const convertToCurrencyFormat = (number, delimiter) => {
  const delimit = delimiter || '.';
  const numberString = typeof number === 'number' ? number.toFixed(0) : number;

  return numberString.replace(/./g, (c, i, a) => (
    i > 0 && c !== delimit && ((a.length - i) % 3 === 0) ? delimit + c : c), // eslint-disable-line prefer-template
  );
};

export default convertToCurrencyFormat;
