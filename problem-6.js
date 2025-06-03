// write a function that calculate the sum of digits

function sumOfDigits(nums) {
  if (!nums) {
    throw new Error("Enter a number to calculate");
  }
  if (nums < 1) {
    throw new Error("Enter a positive number");
  }
  const strNums = nums.toString().split("");
  let digitsSum = 0;
  for (let index = 0; index < strNums.length; index++) {
    digitsSum += Number(strNums[index]);
  }
  return digitsSum;
}

const result = sumOfDigits(1);
console.log(result);
