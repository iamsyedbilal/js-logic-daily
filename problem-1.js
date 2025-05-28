// Find The Area Of Rectangle
function calcAreaRectangle(length, width) {
  if (length <= 0) {
    throw new RangeErrorError(`Please provide Length a Positive Number`);
  }
  if (width <= 0) {
    throw new RangeError(`Please provide Wdith a Positive Number`);
  }
  const areaOfRectangle = length * width;
  return areaOfRectangle;
}

const result = calcAreaRectangle(32, -424);
console.log(`Area of rectangle is ${result}`);
