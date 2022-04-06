//1st operand(left-hand side of expression)
let firstOperand = "";
//2nd operand
let secondOperand = "";
//current operator
let currentOperation = null;
//should screen be reset
let shouldResetScreen = false;

let operate = (a, operator, b) => {
  Number(a);
  Number(b);

  if (operator == "+") {
    operation = add(a, b);
  } else if (operator == "*") {
    operation = multiply(a, b);
  } else if (operator == "-") {
    operation = subtract(a, b);
  } else {
    operation = divide(a, b);
  }
  return (screen.innerText = operation);
};

//select screen display element
let screen = document.querySelector(".screen");

//select all calculator number keys
let numberKeys = document.querySelectorAll(".keys");

//variable for value displayed on the screen
let screenValue = "";
//select operator elements
let operators = document.querySelectorAll(".operators");

//clear display element
let clear = document.querySelector(".clear-button");
//reset screen
let reset = () => {
  screen.innerText = "";
};
//event listener to clear display
clear.addEventListener("click", reset);

//create variable for operator
let operator;

//addEventListeners to number keys
numberKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    screen.innerText += e.target.innerText;
  });
});

screenValue += screen.innerText;
screen.innerText = "";
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.innerText;
    secondNumber += screen.innerText;
    console.log(secondNumber);
  });
});

let equalSign = document.querySelector(".equal");

//function for addition
let add = (a, b) => {
  return a + b;
};

//function for subtration
let subtract = (a, b) => {
  return a - b;
};

//function for multiplication
let multiply = (a, b) => {
  return a * b;
};

//function for division
let divide = (a, b) => {
  return a / b;
};
