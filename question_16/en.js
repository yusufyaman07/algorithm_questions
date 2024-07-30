// Create a function that checks whether the characters 'x' and 'o' are the same number in a string, regardless of case sensitivity. This function returns true if the numbers 'x' and 'o' are equal; otherwise, return false.

function XO(str) {
  let lowerCaseStr = str.toLowerCase();

  let xCount = 0;
  let oCount = 0;

  for (let char of lowerCaseStr) {
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }

  console.log(xCount === oCount);
}
XO("xXxxxooo"); // false
XO("xXxooo"); // true
