const CustomError = require('../extensions/custom-error');

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length; // remove line with error and write your code here
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this; // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position != 'number') {
      this.array = [];
      throw Error();
    }
    if (position >= this.array.length || position <= 0) {
      this.array = [];
      throw Error();
    }
    this.array.splice(position - 1, 1);
    return this; // remove line with error and write your code here
  },
  reverseChain() {
    this.array.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let chain = this.array.join('~~');
    this.array = [];
    return chain; // remove line with error and write your code here
  },
};

module.exports = chainMaker;
