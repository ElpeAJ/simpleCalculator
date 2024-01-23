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
let equal = document.querySelector("#equal");
let dot = document.querySelector("#dot");
let clear = document.querySelector("#clear");

//function for all the numbers
function numOne() {
  result.innerHTML += "1"; // Option 1: Append using +=
  return 1;
}

function numTwo() {
  result.innerHTML += "2";
  return 2;
}

function numThree() {
  result.insertAdjacentHTML("beforeend", "3"); // Option 2: Use insertAdjacentHTML
  return 3;
}

function numFour() {
  result.insertAdjacentHTML("beforeend", "4");
  return 4;
}

function numFive() {
  result.innerHTML += "5";
  return 5;
}

function numSix() {
  result.innerHTML += "6";
  return 6;
}

function numSeven() {
  result.insertAdjacentHTML("beforeend", "7");
  return 7;
}

function numEight() {
  result.insertAdjacentHTML("beforeend", "8"); // Option 2: Use insertAdjacentHTML
  return 8;
}

function numNine() {
  result.innerHTML += "9";
  return 9;
}

function numZero() {
  result.innerHTML += "0"; // Option 1: Append using +=
  return 0;
}

//function for symbols
function symDot() {
  result.insertAdjacentHTML("beforeend", ".");
  return `.`;
}

function symClear() {
  result.innerHTML = " ";
  clear.innerHTML = "AC";
}
function symEqual() {
  // result.insertAdjacentHTML("beforeend", "=");
  // return `=`;
  let finalResult = result.innerHTML;
  finalResult = eval(finalResult);
  result.innerHTML = finalResult;
}

//functions for operators
function plusSign() {
  result.insertAdjacentHTML("beforeend", "+"); // Option 2: Use insertAdjacentHTML
  return `+`;
}

function minusSign() {
  result.insertAdjacentHTML("beforeend", "-");
  return `-`;
}

function divideSign() {
  result.insertAdjacentHTML("beforeend", "/");
  return `/`;
}

function multiplySign() {
  result.insertAdjacentHTML("beforeend", "*");
  return `*`;
}

//Event listener for numbers
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

//Event listeners for symbols
equal.addEventListener("click", symEqual);
dot.addEventListener("click", symDot);
clear.addEventListener("click", symClear);

//Event listeners for operators
plus.addEventListener("click", plusSign);
minus.addEventListener("click", minusSign);
divide.addEventListener("click", divideSign);
multiply.addEventListener("click", multiplySign);

//Create objects of all the return for the functions
// objOne = numOne();
// objTwo = numTwo();
// objThree = numThree();
// objFour = numFour();
// objFive = numFive();
// objSix = numSix();
// objSeven = numSeven();
// objEight = numEight();
// objNine = numNine();
// objZero = numZero();
// objPlus = plusSign();
// objMinus = minusSign();
// objDivide = divideSign();
// objMultiply = multiplySign();
// objDot = symDot();
// objEqual = symEqual();
