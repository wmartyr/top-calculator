const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let displayString = "";
let hasDecimal = false;
let operand1 = 0;
let operand2 = 0;

function showText(displayString) {
  display.textContent = displayString;
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
        break;
      case "divide":
        break;
      case "key-7":
        displayString += "7";
        showText(displayString);
        break;
      case "key-8":
        displayString += "8";
        showText(displayString);
        break;
      case "key-9":
        displayString += "9";
        showText(displayString);
        break;
      case "multiply":
        break;
      case "key-4":
        displayString += "4";
        showText(displayString);
        break;
      case "key-5":
        displayString += "5";
        showText(displayString);
        break;
      case "key-6":
        displayString += "6";
        showText(displayString);
        break;
      case "subtract":
        break;
      case "key-1":
        displayString += "1";
        showText(displayString);
        break;
      case "key-2":
        displayString += "2";
        showText(displayString);
        break;
      case "key-3":
        displayString += "3";
        showText(displayString);
        break;
      case "add":
        break;
      case "key-0":
        displayString += "0";
        showText(displayString);
        break;
      case "dot":
        if (!hasDecimal) {
          displayString += ".";
          showText(displayString);
          hasDecimal = true;
        }
        break;
      case "equals":
        break;
    }
  })
})