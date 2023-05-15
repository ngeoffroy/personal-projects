const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnHero = document.getElementById("btn");
const color = document.querySelector(".color");

btnHero.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const value = Math.floor(Math.random() * hex.length);
    hexColor = hexColor.concat(hex[value]);
  }
  const body = document.body;
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
