// Create a function that collects the elements of the array given below. This function should sum the elements of the array using array methods and return the total value when called.

const numbers = [1, 5, 8, 12, 15, 20, 25, 30, 35, 40];

function arraytotal(array) {
  let total = 0;
  array.forEach((number) => {
    total += number;
  });
  return total;
}

const total = arraytotal(numbers);
console.log(`The sum of the elements of the array: ${total}`);
