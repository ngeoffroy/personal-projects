const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    if (e.currentTarget.classList.contains("decrease")) {
      counter -= 1;
    }
    if (e.currentTarget.classList.contains("increase")) {
      counter += 1;
    }
    if (e.currentTarget.classList.contains("reset")) {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
    } else {
      if (counter < 0) {
        value.style.color = "red";
      } else {
        value.style.color = "black";
      }
    }

    value.textContent = counter;
  });
});

/*

const buttonIncrease = document.getElementById("increase");
const buttonDecrease = document.getElementById("decrease");
const buttonReset = document.getElementById("reset");

const counterValue = document.getElementById("value");

let counter = 0;

function printColorCounter (){
    if (counter === 0){
        counterValue.style.backgroundColor="red"
        counterValue.textContent = counter
    }
}

****** Solución sin querySelector ******

buttonIncrease.addEventListener("click", function () {
  counter += 1;
  counterValue.textContent = counter;
    if (counter > 0){
        value.style.color = "green"
    }
});

buttonDecrease.addEventListener("click", function () {
  counter -= 1;
  counterValue.textContent = counter;
  if (counter === 0){
    value.style.color = "black"
}
});

buttonReset.addEventListener("click", function () {
  counter = 0;
  counterValue.textContent = counter;
  if (counter === 0){
    value.style.color = "black"
}
});*/
