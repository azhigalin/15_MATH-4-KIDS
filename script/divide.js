import * as options from "./app.js";

let answer = 0;

function generateEquation() {
  let num1 = Math.floor(Math.random() * 10) + 1,
    num2 = Math.floor(Math.random() * 10) + 1,
    dummyAnswer1 = Math.floor(Math.random() * 10) / 10,
    dummyAnswer2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

  if (num1 > num2) {
    answer = eval(num1 / num2);
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
  } else {
    answer = eval(num2 / num1);
    document.getElementById("num1").innerHTML = num2;
    document.getElementById("num2").innerHTML = num1;
  }

  if (Number.isInteger(answer) == false) {
    answer = answer.toFixed(1);
  }

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
