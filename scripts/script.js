const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let displayString = "";
let hasDecimal = false;
let operand1 = 0;
let operand2 = 0;
let operator = "none";
let result = 0;
let displayToBeCleared = false
let numberEntered = false;

function resetValues() {
  displayString = "";
  hasDecimal = false;
  operand1 = 0;
  operand2 = 0;
  operator = "none";
  numberEntered = false;
}

function showText(displayString) {
  display.textContent = displayString;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return parseFloat((a + b).toPrecision(9));
      break;
    case "subtract":
      return parseFloat((a - b).toPrecision(9));
      break;
    case "multiply":
      return parseFloat((a * b).toPrecision(9));
      break;
    case "divide":
      return parseFloat((a / b).toPrecision(9));
      break;
  }
}

function clearDisplay(displayClear) {
  if (displayClear) {
    displayString = "";
  }
  return false;
}

function enterCharacter(char) {
  displayToBeCleared = clearDisplay(displayToBeCleared);
  if (displayString.length < 8) {
    displayString += char;
    showText(displayString);
    numberEntered = true;
  }
}

function prepareOperation(action) {
  if (operator === "none") {
    operand1 = parseFloat(displayString);
    numberEntered = false;
  } else {
    if (numberEntered) {
      operand2 = parseFloat(displayString);
      result = operate(operator, operand1, operand2);
      showText(result.toString());
      operand1 = result;
      operand2 = 0;
      numberEntered = false;
    }
  }
  operator = action;
  displayToBeCleared = true;
}

function implementKeys(keyPressed) {
  switch (keyPressed) {
    case "Escape":
      resetValues();
      showText(displayString);
      break;
    case "Backspace":
      if (displayString.slice(-1) === ".") {
        hasDecimal = false;
      }
      displayString = displayString.slice(0, -1);
      showText(displayString);
      break;
    case "`":
      if (displayString.startsWith("-")) {
        displayString = displayString.slice(1);
      } else {
        displayString = "-" + displayString;
      }
      showText(displayString);
      break;
    case "/":
      prepareOperation("divide");
      break;
    case "7":
      enterCharacter(7);
      break;
    case "8":
      enterCharacter(8);
      break;
    case "9":
      enterCharacter(9);
      break;
    case "*":
      prepareOperation("multiply");
      break;
    case "4":
      enterCharacter(4);
      break;
    case "5":
      enterCharacter(5);
      break;
    case "6":
      enterCharacter(6);
      break;
    case "-":
      prepareOperation("subtract");
      break;
    case "1":
      enterCharacter(1);
      break;
    case "2":
      enterCharacter(2);
      break;
    case "3":
      enterCharacter(3);
      break;
    case "+":
      prepareOperation("add");
      break;
    case "0":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        if (!(displayString === "-" || displayString === "")) {
          displayString += "0";
          showText(displayString);
        }
      }
      break;
    case ".":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (!hasDecimal) {
        displayString += ".";
        showText(displayString);
        hasDecimal = true;
      }
      break;
    case "Enter":
      if (operator !== "none" && numberEntered) {
        operand2 = parseFloat(displayString);
        result = operate(operator, operand1, operand2);
        displayString = result.toString();
        showText(displayString);
        hasDecimal = false;
        operand1 = 0;
        operand2 = 0;
        operator = "none";
        numberEntered = false;
        displayToBeCleared = true;
      }
      break;
  }
}

// Mouse Support
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    implementKeys(button.id);
  });
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
  implementKeys(event.key);
});