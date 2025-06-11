"use strict";

const charactersInput = document.querySelector("#charactersInput");
const displayRemainingChar = document.querySelector(".displayRemainingChar");
const refreshCount = document.querySelector(".refreshCount");

const maxLimit = 50;

charactersInput.addEventListener("input", function () {
  let remaining = maxLimit - charactersInput.value.length;

  if (charactersInput.value.length > maxLimit) {
    charactersInput.value = charactersInput.value.slice(0, maxLimit);
    remaining = 0;
  }

  displayRemainingChar.innerText = `Characters remaining: ${remaining}`;

  if (remaining <= 10 && remaining > 0) {
    displayRemainingChar.style.color = "orange";
  } else if (remaining === 0) {
    displayRemainingChar.style.color = "red";
    document.body.style.background = "#ff4e4e";
  } else {
    displayRemainingChar.style.color = "#333";
    document.body.style.background =
      "linear-gradient(to right, #e0eafc, #cfdef3)";
  }
});

refreshCount.addEventListener("click", function () {
  charactersInput.value = "";
  displayRemainingChar.innerText = `Characters remaining: ${maxLimit}`;
  displayRemainingChar.style.color = "#333";
  document.body.style.background =
    "linear-gradient(to right, #e0eafc, #cfdef3)";
});
