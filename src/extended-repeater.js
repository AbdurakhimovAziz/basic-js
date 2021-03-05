const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, obj) {
  let repeatTimes = obj.repeatTimes == undefined ? 1 : obj.repeatTimes;
  let separator = obj.separator + '' == 'undefined' ? '+' : obj.separator;
  let addition = obj.addition + '' == 'undefined' ? '' : obj.addition;
  let additionRepeatTimes = obj.additionRepeatTimes == undefined ? 1 : obj.additionRepeatTimes;
  let additionSeparator = obj.additionSeparator == undefined ? '|' : obj.additionSeparator;
  let answer = '';
  for (let i = 0; i < repeatTimes; i++) {
    answer += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      answer += addition;
      j == additionRepeatTimes - 1 ? answer : (answer += additionSeparator);
    }
    i == repeatTimes - 1 ? answer : (answer += separator);
  }
  return answer;
};
