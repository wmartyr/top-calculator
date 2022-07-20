const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let displayString = "";
let hasDecimal = false;
let operand1 = 0;
let operand2 = 0;
let operator = "none";
let result = 0;
let displayToBeCleared = false

function showText(displayString) {
  display.textContent = displayString;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return parseFloat((a + b).toPrecision(8));
      break;
    case "subtract":
      return parseFloat((a - b).toPrecision(8));
      break;
    case "multiply":
      return parseFloat((a * b).toPrecision(8));
      break;
    case "divide":
      return parseFloat((a / b).toPrecision(8));
      break;
  }
}

function clearDisplay(displayClear) {
  if (displayClear) {
    displayString = "";
  }
  return false;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "ac":
        displayString = "";
        hasDecimal = false;
        showText(displayString);
        break;
      case "c":
        displayString = displayString.slice(0, -1);
        showText(displayString);
        break;
      case "inverse":
        if (displayString.startsWith("-")) {
          displayString = displayString.slice(1);
        } else {
          displayString = "-" + displayString;
        }
        showText(displayString);
        break;
      case "divide":
        if (operator === "none") {
          operand1 = parseFloat(displayString);
          operator = "divide";
        } else {
          operand2 = parseFloat(displayString);
          result = operate(operator, operand1, operand2);
          showText(result.toPrecision(8).toString());
          operand1 = result;
          operand2 = 0;
        }
        displayToBeCleared = true;
        break;
      case "key-7":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "7";
        showText(displayString);
        break;
      case "key-8":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "8";
        showText(displayString);
        break;
      case "key-9":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "9";
        showText(displayString);
        break;
      case "multiply":
        if (operator === "none") {
          operand1 = parseFloat(displayString);
          operator = "multiply";
        } else {
          operand2 = parseFloat(displayString);
        }
        displayToBeCleared = true;
        break;
      case "key-4":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "4";
        showText(displayString);
        break;
      case "key-5":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "5";
        showText(displayString);
        break;
      case "key-6":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "6";
        showText(displayString);
        break;
      case "subtract":
        break;
      case "key-1":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "1";
        showText(displayString);
        break;
      case "key-2":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "2";
        showText(displayString);
        break;
      case "key-3":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        displayString += "3";
        showText(displayString);
        break;
      case "add":
        break;
      case "key-0":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        if (!(displayString === "-" || displayString === "")) {
          displayString += "0";
          showText(displayString);
        }
        break;
      case "dot":
        if (!hasDecimal) {
          displayString += ".";
          showText(displayString);
          hasDecimal = true;
        }
        break;
      case "equals":
        operand2 = parseFloat(displayString);
        result = operate(operator, operand1, operand2);
        showText(result.toString());
        operator = "none";
        operand1 = 0;
        operand2 = 0;
        break;
    }
  })
})