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

function getDegreeDividers(arrOfMultiplaiers) {
  let length = arrOfMultiplaiers.length;
  let arrOfDevider = [[arrOfMultiplaiers[0], 1]];
  let j = 0;

  for (let i = 1; i < length; i++) {
    if (arrOfDevider[j][0] === arrOfMultiplaiers[i]) {
      arrOfDevider[j][1]++;
    } else if (arrOfDevider[j][0] !== arrOfMultiplaiers[i]) {
      j++;
      arrOfDevider.push([arrOfMultiplaiers[i], 1]);
    }
  }
return arrOfDevider;
}


function getDivider(base) {
  let divisible = base;
  let divider = 2;
  let arrOfMultiplaiers = [];
 
  if (isPrime(divisible)) {
    arrOfMultiplaiers.push(divisible);
    arrOfMultiplaiers.push(1);
    return [arrOfMultiplaiers];
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
      return getDegreeDividers(arrOfMultiplaiers);
    }
  }
}

module.exports = function getZerosCount(number, base) {
  let baseAndDegree = getDivider(base);
  let result = [];
  
  for (let i = 0; i < baseAndDegree.length; i++) {
    let divider = baseAndDegree[i][0];
    let currentDevider = divider;
    let maxDegree = Math.floor(Math.log(number) / Math.log(divider));
    let zerosCount = 0;

    for (let currentDegree = 1; currentDegree <= maxDegree; currentDegree++) {
      zerosCount +=  Math.floor(number / currentDevider);
      currentDevider = currentDevider * divider;
    }
    result.push(Math.floor(zerosCount / baseAndDegree[i][1]));
  }
  return Math.min.apply(null, result);
}