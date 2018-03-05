module.exports = function getZerosCount(number, base) {
  let maxDegree = Math.floor(Math.log(number) / Math.log(base));
  let zerosArr = [];
  let currentNum = base;
  let zerosCount = 0;

  for( let currentDegree = 1; currentDegree <= maxDegree; currentDegree++) {
    zerosCount +=  Math.floor(number / currentNum);
    currentNum = currentNum * base;
  }
  return zerosCount;
}