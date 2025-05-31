// write a function that return the reverse string

function reverseString(str) {
  const result = str.split("").reverse().join("");
  console.log(result);
}

reverseString("bilal is a good boy");
