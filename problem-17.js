//Write a function that count words of a sentence

function countWords(str) {
  if (!str || str.length === 0) {
    throw new Error("Please enter a string to count the words");
  }
  return str.split(" ").length;
}

const result = countWords("I am a good boy");

console.log(result);
