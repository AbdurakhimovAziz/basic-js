const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const finalActivity = +sampleActivity;
  if (typeof sampleActivity !== 'string' || isNaN(finalActivity) || finalActivity <= 0 || finalActivity > 15) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / finalActivity) / k);
};
