// write a function that calculate the leap year

function calculateLeapYear(year) {
  if (!year) {
    throw new Error("Function cannot be empty");
  }

  if (year <= 0) {
    throw new Error("Please provide a positive number");
  }

  if (typeof year !== "number") {
    throw new Error("Please provide a valid number");
  }

  return year % 4 === 0
    ? `The year ${year} you provide is a Leap year`
    : `The year ${year} you provide is not a Leap year`;
}

const result = calculateLeapYear(2034);
console.log(result);
