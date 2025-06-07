// Write a function that check Palindrome

function checkPalindrome(str) {
  if (!str || str.length === 0) {
    throw new Error("Please enter the string value");
  }

  if (typeof str !== "string") {
    throw new Error("Please enter a valid string");
  }

  str === str.split("").reverse().join("")
    ? console.log(`Yep the provided string is Palindrome`)
    : console.log(`It is not a Plaindrome`);
}

checkPalindrome("madam");
