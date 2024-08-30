// calculator

let userInput = document.getElementById("user-input");

let displayValue = "";
let firstOperand = "";
let secondOperand = "";
let operator = "";

function appendNumber(value) {
  displayValue += value;
  userInput.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  userInput.value = displayValue;
}

function performOperation(op) {
  firstOperand = parseFloat(displayValue);
  operator = op;
  displayValue = "";
}

function calculateResult() {
  secondOperand = parseFloat(displayValue);
  let result = "";

  //using switch case

  // switch (operator) {
  // case "+":
  // result = firstOperand + secondOperand;
  // break;
  // case "-":
  // result = firstOperand - secondOperand;
  // break;
  // case "*":
  // result = firstOperand * secondOperand;
  // break;
  // case "/":
  // Check for division by zero
  // if (secondOperand === 0) {
  // result = "Cannot divide by zero";
  // } else {
  // result = firstOperand / secondOperand;
  // }
  // break;
  // default:
  // result = "Invalid operation";
  // }

  //using else if

  if (operator === "+") {
    result = firstOperand + secondOperand;
  } else if (operator === "-") {
    result = firstOperand - secondOperand;
  } else if (operator === "*") {
    result = firstOperand * secondOperand;
  } else if (operator === "/") {
    if (secondOperand === 0) {
      result = "Cannot Devide By Zero";
    } else {
      result = firstOperand / secondOperand;
    }
  }
  displayValue = result;
  userInput.value = displayValue;
}
