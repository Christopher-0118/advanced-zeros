function isPrime(number) {
  if (number === 1) {
    return false;
  }
	for (let divider = 2; divider * divider <= number; divider++) {
		if (number % divider === 0) {
    	return false;
    }
  }
	return true;
}

function getSimpleMultiplier(base) {
  let divisible = base;
  let divider = 2;
  let arrOfMultiplaiers = [];
 
  if (isPrime(divisible)) {
    arrOfMultiplaiers.push(divisible);
    return arrOfMultiplaiers;
  }
  while (divisible > 1) {
    if (divisible % divider !== 0) {
      divider++;
    }
    if (!isPrime(divisible) && isPrime(divider) && (divisible % divider === 0)) {
      divisible = divisible / divider;
      arrOfMultiplaiers.push(divider);
    }
    if (isPrime(divisible)) {
      arrOfMultiplaiers.push(divisible);
      arrOfMultiplaiers.reverse();
      while(arrOfMultiplaiers[arrOfMultiplaiers.length - 1] !== divisible) {
        arrOfMultiplaiers.pop();
      }
      return arrOfMultiplaiers;
    }
  }
}

module.exports = function getZerosCount(number, base) {
  let baseAndDegree = getSimpleMultiplier(base);
  let currentDevider = baseAndDegree[0];
  let divider = baseAndDegree[0];
  let maxDegree = Math.floor(Math.log(number) / Math.log(divider));
  let zerosCount = 0;

  for (let currentDegree = 1; currentDegree <= maxDegree; currentDegree++) {
    zerosCount +=  Math.floor(number / currentDevider);
    currentDevider = currentDevider * divider;
  }
  return Math.floor(zerosCount / baseAndDegree.length);
}