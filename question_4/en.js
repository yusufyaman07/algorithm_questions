// Create a function that takes a 4-digit number input from the user, finds the numerical values of each digit in its place, and returns them.

// Example: For the input number 1234, it should return "Thousands Digit=1, Hundreds Digit=2, Tens Digit=3, Units Digit=4".

let number = prompt("Please enter a 4-digit number:");

if (number.length === 4 && !isNaN(number)) {
  let thousands = Math.floor(number / 1000);
  let hundreds = Math.floor((number % 1000) / 100);
  let tens = Math.floor((number % 100) / 10);
  let units = number % 10;

  console.log(
    "Thousands Digit: " +
      thousands +
      "\n" +
      "Hundreds Digit: " +
      hundreds +
      "\n" +
      "Tens Digit: " +
      tens +
      "\n" +
      "Units Digit: " +
      units
  );
} else {
  console.log("Please enter a valid 4-digit number.");
}
