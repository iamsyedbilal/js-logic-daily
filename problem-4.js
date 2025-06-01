//write a function that calculate factorial of a given number

function calculateFactorialNum(num) {
  if (num <= 0) {
    throw new Error("Number can not be less then ZERO");
  }
  let res = 1;
  for (let index = 1; index <= num; index++) {
    res = res * index;
  }
  return res;
}

const factorialNum = calculateFactorialNum(5);
console.log(factorialNum);
