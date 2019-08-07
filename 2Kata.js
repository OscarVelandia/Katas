// 1er ejercicio de http://www.medallia.com.ar/internships/doc/2018.pdf

const upperLimit = 21000;
// const numbers = [
//   1, 10, 100, 12, 15, 16, 17, 18, 19, 21, 22, 23, 24,
//   26, 27, 28, 29, 3, 35, 37, 39, 4, 40, 43, 45, 46, 47,
//   48, 49, 51, 52, 53, 54, 55, 57, 6, 60, 62, 63, 65, 66,
//   68, 7, 71, 72, 73, 75, 77, 79, 8, 80, 81, 82, 83, 84,
//   86, 87, 88, 89, 9, 90, 92, 93, 94, 97, 98, 99
// ]

const numbers = new Array(21000).fill().map((_, index) => index + 1);
const numbersLength = numbers.length;


function orchestrateDataClean(upperLimit, listLength, numbers) {
  const firstNumberFilter = numbers.filter(num => num < upperLimit);

  const secondNumberFilter = [...firstNumberFilter]
    .map((_, index) => {
      const copyFirstFilteredNumbers = [...firstNumberFilter];

      if (copyFirstFilteredNumbers.length > (index + 1)) {
        return thirdNumberFilter(copyFirstFilteredNumbers.splice(index), upperLimit);
      } 
    })
    .filter(array => array && array.length); // Para quitar arrays vacios
  
  return doSum(secondNumberFilter);
}

function thirdNumberFilter(array, upperLimit) {
  const pivotNumber = array[0];
  const upperLimitInFilterArray = upperLimit - pivotNumber;  
  
  return array
    .filter(num => num !== pivotNumber)
    .filter(num => num < upperLimitInFilterArray );
}

function doSum(array) {
  let arraySum = 0;
  array.forEach(arr => arraySum += arr.length);

  return arraySum;
}

console.log(orchestrateDataClean(upperLimit, numbersLength, numbers));
