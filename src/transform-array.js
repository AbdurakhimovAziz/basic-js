const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let transformedArr = arr ? arr.slice() : [];
  transformedArr.forEach((element, index) => {
    if (element === '--discard-next') {
      transformedArr.splice(index, 2);
    }
    if (element === '--discard-prev') {
      index === 0 ? transformedArr.splice(index, 1) : transformedArr.splice(index - 1, 2);
    }
    if (element === '--double-next') {
      index === transformedArr.length - 1 ? transformedArr.splice(index, 1) : transformedArr.splice(index, 1, transformedArr[index + 1]);
    }
    if (element === '--double-prev') {
      index === 0 ? transformedArr.splice(index, 1) : transformedArr.splice(index, 1, transformedArr[index - 1]);
    }
  });
  return transformedArr;
};
