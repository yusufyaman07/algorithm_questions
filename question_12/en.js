// Write a JavaScript function that creates separate arrays of odd and even numbers from the elements of a given number array.

function separateOddEven(array) {
  let oddNumbers = [];
  let evenNumbers = [];

  array.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  });

  return { oddNumbers, evenNumbers };
}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = separateOddEven(numberArray);
console.log("Odd Numbers:", result.oddNumbers);
console.log("Even Numbers:", result.evenNumbers);
