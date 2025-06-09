// write a function that count and print the number of Vowels.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let nonVowels = 0;
  for (let index = 0; index < str.length; index++) {
    vowels.includes(str[index].toLowerCase()) ? count++ : nonVowels++;
  }
  console.log(
    `The Number of vowels in the String is ${count} & non vowels are ${nonVowels}`
  );
}

countVowels("aeioufoige");
