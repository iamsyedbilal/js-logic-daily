// write a function that calculate celsius to fahrenheit

function celsiusToFahrenheit(cel) {
  if (!cel) {
    throw new Error("Please Enter the value to calculate");
  }
  const convertedValue = (cel * 9) / 5 + 32;
  return convertedValue;
}

const result = celsiusToFahrenheit(32);
console.log(result);
