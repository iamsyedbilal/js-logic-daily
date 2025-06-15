// Write a function that calculate the simple interest

function calInterest(amount, rate, years = 1) {
  if (!amount || typeof amount !== "number") {
    throw Error("Please enter the amount to calculate the interest");
  }
  const calInterestRate = (amount * rate * years) / 100;
  return calInterestRate;
}

const result = calInterest(1000, 5, 2);
console.log(`\nCalculated Simple Interest: $${result}`);
