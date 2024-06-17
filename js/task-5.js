const bgColGenegate = document.querySelector(".widget");
const body = document.body;
const changeColor = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  outputColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
