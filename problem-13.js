//write a function that calculate and return the average set of number

function numbersAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.warn("Input must be a non-empty array of numbers.");
    return 0;
  }
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const average = sum / numbers.length;

  return average;
}

const result = numbersAverage([3, 23, 42, 32]);
console.log(result);
