// 4to ejercicio de http://www.medallia.com.ar/internships/doc/2018.pdf

const startingTime = [3, 1, 6, 2];
const endingTime = [3, 3, 7, 9];

function numberOfChunks(startingTime, endingTime) {
  const [quantityOfmeetings, ...onlyStartingTime] = startingTime;
  const [, ...onlyEndingTime] = endingTime;
  const maxStartingTime = Math.max(...onlyStartingTime);
  const minEndingTime = Math.min(...onlyEndingTime);
  /*const startingTimeWithouthTranslapings = onlyStartingTime
    .filter(element => element < maxStartingTime);
  const endingTimeWithouthTranslapings = onlyEndingTime
    .filter(element => element > minEndingTime);*/

  console.log(startingTimeWithouthTranslapings, endingTimeWithouthTranslapings);
}



console.log(numberOfChunks(startingTime, endingTime));
