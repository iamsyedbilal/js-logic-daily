const limitInput = document.getElementById("limitInput");
const btn = document.getElementById("btn");
const outputList = document.getElementById("outputList");
const message = document.getElementById("message");

function playGame() {
  const limit = parseInt(limitInput.value);
  outputList.innerHTML = "";
  message.textContent = "";

  if (isNaN(limit) || limit < 1) {
    message.textContent = "Please enter a valid positive number.";
    return;
  }

  for (let i = 1; i <= limit; i++) {
    let listItem = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) {
      listItem.textContent = "FizzBuzz";
      listItem.classList.add("fizzbuzz");
    } else if (i % 3 === 0) {
      listItem.textContent = "Fizz";
      listItem.classList.add("fizz");
    } else if (i % 5 === 0) {
      listItem.textContent = "Buzz";
      listItem.classList.add("buzz");
    } else {
      listItem.textContent = i;
    }
    outputList.appendChild(listItem);
  }
}

btn.addEventListener("click", playGame);
