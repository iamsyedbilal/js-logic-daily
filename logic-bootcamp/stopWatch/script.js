const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");
const milliSecElement = document.getElementById("milliseconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("resetBtn");

let min = 0;
let sec = 0;
let milliSec = 0;
let intervalId = null;

function displayUpdate() {
  minElement.innerText = String(min).padStart(2, "0");
  secElement.innerText = String(sec).padStart(2, "0");
  milliSecElement.innerText = String(milliSec).padStart(2, "0");
}

function startTimer() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    milliSec++;
    if (milliSec === 100) {
      sec++;
      milliSec = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    displayUpdate();
  }, 10);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  min = 0;
  sec = 0;
  milliSec = 0;
  displayUpdate();
}

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", stopTimer);

resetBtn.addEventListener("click", resetTimer);

displayUpdate();
