const CustomError = require('../extensions/custom-error');
const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.keys(date).length > 0 || typeof date !== 'object') throw 'Error';
  const month = date.getMonth();
  return seasons[month];
  // remove line with error and write your code here
};
