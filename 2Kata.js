const maxNumber = 10;
const numbersLength = 4;
const numbers = [3, 2, 8, 7, 4, 9, 5]

function cleanGeneralData(maxNumber, listLength, numbers) {
  const numbersToIterate = numbers.filter(num => num < maxNumber);

  const arrayToDetectSum = numbersToIterate
    .map(num => cleanDataWithEveryNumber(num, maxNumber, numbersToIterate))
    .map((array, i) => array.splice(i))
    .filter(array => array.length > 1);

  console.log(arrayToDetectSum)
  // arrayToDetectSum.map(singleArray => sumEveryArrayOfNumbers(singleArray, maxNumber));
}

function cleanDataWithEveryNumber(number, upperLimit, allNumbers) {
  const numberToDelete = upperLimit - number;
  const filteredNumbersArray = allNumbers.filter(num => num < numberToDelete);
  console.log(filteredNumbersArray)
  return filteredNumbersArray;
}

function sumEveryArrayOfNumbers(numbersToSum, maxNumber) {
  let pivotNumber = numbersToSum.shift();
  
  numbersToSum.map(num => maxNumber - num);
  
  // console.log(numberOfPairs);
}

cleanGeneralData(maxNumber, numbersLength, numbers);
