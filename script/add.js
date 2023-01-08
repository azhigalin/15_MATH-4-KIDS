import * as options from "./app.js";

let answer = 0;

function generateEquation() {
  let num1 = Math.floor(Math.random() * 100),
    num2 = Math.floor(Math.random() * 100),
    dummyAnswer1 = Math.floor(Math.random() * 100),
    dummyAnswer2 = Math.floor(Math.random() * 100),
    allAnswers = [],
    switchAnswers = [];
  answer = num1 + num2;

  document.querySelector("#num1").innerHTML = num1;
  document.querySelector("#num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];
  for (let i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  options.option1.innerHTML = switchAnswers[0];
  options.option2.innerHTML = switchAnswers[1];
  options.option3.innerHTML = switchAnswers[2];
}

options.option1.addEventListener("click", () => {
  options.option1.innerHTML == answer
    ? generateEquation()
    : options.audio.play();
});

options.option2.addEventListener("click", () => {
  options.option2.innerHTML == answer
    ? generateEquation()
    : options.audio.play();
});

options.option3.addEventListener("click", () => {
  options.option3.innerHTML == answer
    ? generateEquation()
    : options.audio.play();
});

generateEquation();
