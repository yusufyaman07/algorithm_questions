// Create a function that calculates the factorial of a number entered by the user. This function should perform the calculation and return the result when called.

function factorialCalculate(n) {
  if (n < 0) {
    return "Invalid input: The factorial of negative numbers cannot be calculated.";
  } else if (n === 0 && n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

const number = parseInt(
  prompt("Enter the number to be calculated with factorial:")
);

const result = factorialCalculate(number);
console.log("Result:", result);
