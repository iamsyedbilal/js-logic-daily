const qoutes = [
  "The best way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Clean code always looks like it was written by someone who cares. - Michael Feathers",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "In order to be irreplaceable, one must always be different. - Coco Chanel",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Before software can be reusable it first has to be usable. - Ralph Johnson",
  "Debugging is like being the detective in a crime movie where you are also the murderer. -  Filipe Fortes",
];

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");

function generateQuote() {
  const randomQoutesNumber = Math.floor(Math.random() * qoutes.length);
  quote.innerHTML = qoutes[randomQoutesNumber];
  btn.disabled = true;

  setTimeout(() => {
    btn.disabled = false;
  }, 500);
}

btn.addEventListener("click", generateQuote);
generateQuote();
