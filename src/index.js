//select all the operators 
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");

//select all the numbers
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

//select all the symbols
let result = document.querySelector("#result");
let dot = document.querySelector("#dot");
let clear = document.querySelector("#clear");

function numOne() {
  result.innerHTML += "1"; // Option 1: Append using +=

  return 1;
}

function numTwo() {
  result.innerHTML += "2"; // Option 1: Append using +=

  return 2;
}

function numThree() {
  result.insertAdjacentHTML("beforeend", "3"); // Option 2: Use insertAdjacentHTML
  return 3;
}

function numFour() {
  result.insertAdjacentHTML("beforeend", "4"); // Option 2: Use insertAdjacentHTML
  return 4;
}

function numFive() {
  result.innerHTML += "5"; // Option 1: Append using +=

  return 5;
}

function numSix() {
  result.innerHTML += "6"; // Option 1: Append using +=

  return 6;
}

function numSeven() {
  result.insertAdjacentHTML("beforeend", "7"); // Option 2: Use insertAdjacentHTML
  return 7;
}

function numEight() {
  result.insertAdjacentHTML("beforeend", "8"); // Option 2: Use insertAdjacentHTML
  return 8;
}

function numOne() {
  result.innerHTML += "1"; // Option 1: Append using +=

  return 1;
}

function numTwo() {
  result.innerHTML += "2"; // Option 1: Append using +=

  return 2;
}

function numThree() {
  result.insertAdjacentHTML("beforeend", "3"); // Option 2: Use insertAdjacentHTML
  return 3;
}

function numFour() {
  result.insertAdjacentHTML("beforeend", "4"); // Option 2: Use insertAdjacentHTML
  return 4;
}

one.addEventListener("click", numOne);
two.addEventListener("click", numTwo);
three.addEventListener("click", numThree);
four.addEventListener("click", numFour);
five.addEventListener("click", numFive);
six.addEventListener("click", numSix);
seven.addEventListener("click", numSeven);
eight.addEventListener("click", numEight);
nine.addEventListener("click", numNine);
zero.addEventListener("click", numZero);
