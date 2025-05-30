//Check Number is Odd or Even

function checkNumberOddOrEven(num) {
  return num % 2 === 0
    ? console.log(`The number ${num} you enter is Even Number`)
    : console.log(`The number ${num} you enter is Odd Number`);
}

// checkNumberOddOrEven(2);

// Find the smallest Number
function findTheSmallestNum(...nums) {
  let min = nums[0];
  for (let index = 0; index < nums.length; index++) {
    if (min > nums[index]) {
      min = nums[index];
    }
  }
  console.log(`The minimum number from the given numbers is ${min}`);
}

findTheSmallestNum(3, 12, 4, 324, 42, 3, 234, 1, 4);
