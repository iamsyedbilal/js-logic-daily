// Write a function that swap two numbers

function swapNumbers(a, b) {
  if (a === undefined || b === undefined) {
    return "Both numbers are required for the swap.";
  }

  let temp = a;
  a = b;
  b = temp;

  return `After swap: a = ${a}, b = ${b}`;
}
