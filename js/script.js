//1st operand(left-hand side of expression)
let firstOperand = "";
//2nd operand
let secondOperand = "";
//current operator
let currentOperation = null;
//should screen be reset
let shouldResetScreen = false;

//select screen display element
const currentOpScreen = document.querySelector(".current-operation");

//select element to display the last operation
const lastOpScreen = document.querySelector(".last-operation");

//select all calculator number keys
let numberKeys = document.querySelectorAll(".keys");

//select operator elements
const operators = document.querySelectorAll(".operators");

//clear display element
const clearBtn = document.querySelector(".clear-button");

//select equal sign element
const equalSign = document.querySelector(".equal");

//select delete button
const deleteBtn = document.querySelector(".delete-button");

//listen for click on clear
clearBtn.addEventListener("click", clear);

//listen for click on equal
equalSign.addEventListener("click", evaluate);

//Listen for click on number keys
numberKeys.forEach((key) => {
  key.addEventListener("click", () => append(key.innerText));
});

//listen for click on operators
operators.forEach((operator) => {
  operator.addEventListener("click", () => setOperation(operator.innerText));
});

deleteBtn.addEventListener("click", del);

function setOperation(operator) {
  firstOperand = currentOpScreen.innerText;
  currentOperation = operator;
  lastOpScreen.innerText = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function append(number) {
  if (currentOpScreen.innerText == "0" || shouldResetScreen) {
    resetScreen();
  }
  currentOpScreen.innerText += number;
}

// delete function
function del() {
  currentOpScreen.innerText = currentOpScreen.innerText.toString().slice(0, -1);
}
//reset screen
function resetScreen() {
  currentOpScreen.innerText = "";
  shouldResetScreen = false;
}

//clear calculator when clear button clicked
function clear() {
  currentOpScreen.innerText = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

//function to evaluate experession
function evaluate() {
  secondOperand = currentOpScreen.innerText;
  lastOpScreen.innerText = `${firstOperand} ${currentOperation} ${secondOperand}=`;
  currentOpScreen.innerText = operate(
    firstOperand,
    currentOperation,
    secondOperand
  );
}

//function to perform operations based on selected operator
let operate = (a, operator, b) => {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "x":
      return multiply(a, b);
    case "-":
      return subtract(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null;
  }
};

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
