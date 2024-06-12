let display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let num = "";
let resultDisplayed = false;
display.value = "0";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    let operator = event.target.innerHTML;

    if (operator === "=") {
      console.log(display.value, "rt");

      try {
        display.value = eval(num);
        num = display.value;
        resultDisplayed = true;
      } catch {
        display.value = "Error";
        num = "";
      }
    } else if (operator === "C") {
      display.value = "0";
      num = "";
    } else {
      if (resultDisplayed) {
        num = "";
        resultDisplayed = false;
      }
      num += operator;
      display.value = num;
    }
  });
});
