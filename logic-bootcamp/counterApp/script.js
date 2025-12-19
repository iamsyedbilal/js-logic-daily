// Counter APP
const inputValue = document.querySelector(".counter-value");
const decBtn = document.querySelector(".decrement");
const incBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset");
const incrementByValue = document.querySelector(".incrementByValue");
const updateCounter = document.querySelector(".updateCounter");

let count = 0;
inputValue.value = count;

function updateUi() {
  inputValue.value = count;
}

decBtn.addEventListener("click", function () {
  if (count <= 0) return;
  count--;
  updateUi();
});

incBtn.addEventListener("click", function () {
  if (count >= 100) return;
  count++;
  inputValue.value = count;
  updateUi();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  inputValue.value = count;
  updateUi();
});

updateCounter.addEventListener("click", function () {
  const valueToAdd = parseInt(incrementByValue.value, 10);

  if (isNaN(valueToAdd)) {
    alert("Please enter a valid number");
    return;
  }

  if (count + valueToAdd < 0) {
    alert("Please enter a positive number");
    return;
  }

  if (count + valueToAdd > 100) {
    alert("Value exceeds the maximum limit of 100");
    return;
  }

  if (!isNaN(valueToAdd)) {
    count += valueToAdd;
    inputValue.value = count;
    incrementByValue.value = "";
  }
  updateUi();
});
