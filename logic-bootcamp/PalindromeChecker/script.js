const inputText = document.getElementById("inputText");
const checkButton = document.getElementById("checkButton");
const resultDiv = document.getElementById("result");

function palindromeChecker(str) {
  const cleanedStr = str.toLowerCase().replaceAll(" ", "");
  const reversedStr = cleanedStr.split("").reverse().join("");

  cleanedStr === reversedStr
    ? resultUpdateFunc("It's a palindrome!")
    : resultUpdateFunc("It's not a palindrome.");
  inputText.value = "";
}

function resultUpdateFunc(txt) {
  resultDiv.innerText = txt;
}

checkButton.addEventListener("click", function () {
  if (inputText.value === "") {
    resultUpdateFunc("Enter a value to check the Palindrome");
    return;
  }

  palindromeChecker(inputText.value);
});
