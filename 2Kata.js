const maxNumber = 20;
const numbersLength = 12;
const numbers = [3, 2, 8, 7, 4, 9, 5, 15, 6, 1, 10, 17]
// TODO arreglar bug con el 15
function cleanGeneralData(upperLimit, listLength, numbers) {
  const firstFilteredNumbers = numbers.filter(num => num < upperLimit);
  const arrayToSum = firstFilteredNumbers
    .map((_, index) => {
      const copyFirstFilteredNumbers = [...firstFilteredNumbers];

      if (firstFilteredNumbers.length > (index + 1)) {
        return secondDataFilter(copyFirstFilteredNumbers.splice(index), upperLimit);
      } 
    })
    .filter(array => array && array.length)
  
    console.log(arrayToSum)
  return doSum(arrayToSum);
}

function secondDataFilter(array, upperLimit) {
  const pivotNumber = array[0];
  const upperLimitInFilterArray = upperLimit - pivotNumber;  
  console.log(upperLimitInFilterArray)
  return array.filter(num => num < upperLimitInFilterArray);
}

function doSum(array) {
  const arrayLength = array.length;
  const allArrayItemsQuantity = [].concat(...array).length;

  return allArrayItemsQuantity - arrayLength;
}

console.log(cleanGeneralData(maxNumber, numbersLength, numbers));
