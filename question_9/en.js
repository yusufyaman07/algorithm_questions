// In order for a triangle to be drawn according to its sides, the length of each side must be less than the sum of the lengths of the other two sides and greater than their difference.

// ! Create a function that determines whether a triangle can be formed with these side lengths, based on the 3 numbers received from the user. If it can be drawn, "A triangle can be drawn with these three sides." If not, "A triangle cannot be drawn with these three sides." Give an output like .

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return console.log("A triangle can be drawn with these three sides.");
  } else {
    return console.log("A triangle cannot be drawn with these three sides.");
  }
}

const edge1 = 5;
const edge2 = 7;
const edge3 = 10;

isTriangle(edge1, edge2, edge3);
