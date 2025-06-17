// Write a function that tells the number is prime or not

function checkPrime(num) {
  if (!num || typeof num !== "number") {
    throw Error("Please enter the number to check");
  }

  return num % 2 === 0
    ? console.log(`The provided number ${num} is the prime number`)
    : console.log(`The provided number ${num} is the not a prime number`);
}

const result = checkPrime(3);
console.log(result);
