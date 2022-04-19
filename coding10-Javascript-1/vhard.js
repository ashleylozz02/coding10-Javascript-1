/////VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /)
///and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
////Example output: "3 + 4 = 7"
function calculator() {
  number1 = Number(prompt("Please enter the 1st number"));
  mathOperation = prompt("Please enter +, -, *, or /");
  number2 = Number(prompt("Please enter the 2nd number"));

  if (anyOperation === "+") {
    add();
  } else if (anyOperation === "-") {
    subtract();
  } else if (anyOperation === "*") {
    multiply();
  } else if (anyOperation === "/") {
    divide();
  } else {
    console.log(`That the incorrect math function`);
  }
}
