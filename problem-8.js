// Write a function and find the largest number of array

function findLargestNum(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error("Please provide a non-empty array of numbers.");
  }

  let result = nums[0];
  for (let index = 0; index <= nums.length; index++) {
    if (result < nums[index]) {
      result = nums[index];
    }
  }
  console.log(result);
}

findLargestNum([5, 3, 6, 9]);
