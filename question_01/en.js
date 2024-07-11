// Create a JavaScript function. This function should take two integers received from the user as parameters and return the sum of these two integers when called. Create this function and print the result to the console.

function addNumbers(x, y) {
  return x + y;
}

const number1 = parseInt(prompt("Enter the first number: "));
const number2 = parseInt(prompt("Enter the second number: "));

const result = addNumbers(number1, number2);

console.log(result);
