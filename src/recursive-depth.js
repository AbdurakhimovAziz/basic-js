const CustomError = require('../extensions/custom-error');
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let count = 1;

    arr.forEach(element => {
      if (Array.isArray(element)) {
        count = Math.max(count, this.calculateDepth(element) + 1);
      }
    });
    return count;
    // remove line with error and write your code here
  }
};
