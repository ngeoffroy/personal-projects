const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnHero = document.getElementById("btn-hero");
const color = document.querySelector(".colorBackground");

btnHero.addEventListener("click", function () {
  //const randomNumber = Math.floor(Math.random() * ((colors.length -1) - 0 + 1) + 0);
  const randomNumber = getRandomElement();
  const body = document.body;
  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomElement () {
    return Math.floor(Math.random() * colors.length)
}