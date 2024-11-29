/**
 * Rounds a and b
 * @param {String} type
 * @param {Number} a
 * @param {Number} b
 * @returns Return result dependent on operation type
 */
function calculateNumber(type, a, b) {
  let result;
  if (type === 'SUM') {
    result = Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    result = Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      result = 'Error';
    } else {
      result = Math.round(a) / Math.round(b);
    }
  }
  return result;
}

module.exports = calculateNumber;
