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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "ac":
        resetValues();
        showText(displayString);
        break;
      case "c":
        if (displayString.slice(-1) === ".") {
          hasDecimal = false;
        }
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
        prepareOperation("divide");
        break;
      case "key-7":
        enterCharacter(7);
        break;
      case "key-8":
        enterCharacter(8);
        break;
      case "key-9":
        enterCharacter(9);
        break;
      case "multiply":
        prepareOperation("multiply");
        break;
      case "key-4":
        enterCharacter(4);
        break;
      case "key-5":
        enterCharacter(5);
        break;
      case "key-6":
        enterCharacter(6);
        break;
      case "subtract":
        prepareOperation("subtract");
        break;
      case "key-1":
        enterCharacter(1);
        break;
      case "key-2":
        enterCharacter(2);
        break;
      case "key-3":
        enterCharacter(3);
        break;
      case "add":
        prepareOperation("add");
        break;
      case "key-0":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        if (displayString.length < 8) {
          if (!(displayString === "-" || displayString === "")) {
            displayString += "0";
            showText(displayString);
          }
        }
        break;
      case "dot":
        displayToBeCleared = clearDisplay(displayToBeCleared);
        if (!hasDecimal) {
          displayString += ".";
          showText(displayString);
          hasDecimal = true;
        }
        break;
      case "equals":
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
  });
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
  console.log(event);
  switch (event.key) {
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
      operator = "divide";
      displayToBeCleared = true;
      break;
    case "7":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "7";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "8":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "8";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "9":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "9";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "*":
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
      operator = "multiply";
      displayToBeCleared = true;
      break;
    case "4":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "4";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "5":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "5";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "6":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "6";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "-":
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
      operator = "subtract";
      displayToBeCleared = true;
      break;
    case "1":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "1";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "2":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "2";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "3":
      displayToBeCleared = clearDisplay(displayToBeCleared);
      if (displayString.length < 8) {
        displayString += "3";
        showText(displayString);
        numberEntered = true;
      }
      break;
    case "+":
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
      operator = "add";
      displayToBeCleared = true;
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
});