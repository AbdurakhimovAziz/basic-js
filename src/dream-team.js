const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = members.filter(el => typeof el === 'string').map(member => member.trim()[0].toUpperCase());
  return result.sort().join('');
  // remove line with error and write your code here
};
