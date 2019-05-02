function digital_root(n) {
  const arrayOfNumbers = [...n.toString(10)].map(Number);
  const add = (a, b) => a + b;
  // reduce toma una función con 2 valores el primero un acumulador y el segundo, el valor que se esta iterado.
  const sum = arrayOfNumbers.reduce(add);

  if(sum > 9) {
    digital_root(sum);
  } else {
    console.log(sum);
    return sum
  }
}

digital_root(456);
