const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  const result = arr.reduce((newArr, num, i) => {
    if (arr[i - 1] === '--discard-next') return newArr;
    if (arr[i - 1] === '--double-next') newArr.push(arr[i]);
    if (arr[i + 1] === '--double-prev') newArr.push(arr[i]);
    if (arr[i + 1] === '--discard-prev') return newArr;

    if (num === '--discard-next' || num === '--double-prev' || num === '--double-next' || num === '--discard-prev') {
      return newArr;
    }

    newArr.push(arr[i]);

    return newArr;
  }, []);

  return result;
};
