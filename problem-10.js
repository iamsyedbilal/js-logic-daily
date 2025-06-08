// write a function that return the result of given number power

function basePowerExponent(base, exponent) {
  if (!base || !exponent) {
    throw new Error(`Base and Exponent both required`);
  }

  const result = base ** exponent;
  return result;
}

const resultedValue = basePowerExponent(5, 4);
console.log(resultedValue);
