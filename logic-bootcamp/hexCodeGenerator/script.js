const hexCodeDisplay = document.getElementById("hexCodeDisplay");
const generateBtn = document.getElementById("generateBtn");
const heading = document.getElementById("heading");
const body = document.body;

function generateRandomHexCode() {
  let hex = "0123456789ABCDEF";
  let code = "#";

  for (let index = 0; index < 6; index++) {
    const randomIndex = Math.floor(Math.random() * 16);
    code += hex[randomIndex];
  }
  return code;
}

function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000000" : "#FFFFFF";
}

generateBtn.addEventListener("click", function () {
  const color = generateRandomHexCode();
  const textColor = getTextColor(color);
  body.style.backgroundColor = color;
  hexCodeDisplay.textContent = color;
  hexCodeDisplay.style.color = textColor;
  heading.style.color = textColor;
});

hexCodeDisplay.addEventListener("click", async function () {
  if (!hexCodeDisplay.textContent.startsWith("#")) return;
  const text = hexCodeDisplay.textContent;
  await navigator.clipboard.writeText(text);
  hexCodeDisplay.innerText = "Copied!";
  setTimeout(() => {
    hexCodeDisplay.innerText = text;
  }, 1000);
});
