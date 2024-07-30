// In order to draw a polygon, it grows in at least 3 pieces. The sum of the interior angles of a polygon with n sides is found by the formula (n-2)*180.

// ! Create a function that gives the sum of the interior angles of a polygon given the number of sides. If the number of edges is less than 3, this function returns 'The number of edges must be 3 or greater than 3.' and if the number of sides is greater than 3, it should calculate the sum of the interior angles of this polygon.

function sumOfInteriorAngles(n) {
  if (n >= 3) {
    const sumOfInteriorAngles = (n - 2) * 180;
    console.log(`Sum of Interior Angles: ${sumOfInteriorAngles}`);
  } else {
    alert("The number of edges must be 3 or greater than 3.");
  }
}

const numberOfEdges = parseInt(
  prompt(
    "Enter the number of sides of the polygon whose sum of interior angles will be calculated."
  )
);
if (!isNaN(numberOfEdges)) {
  sumOfInteriorAngles(numberOfEdges);
} else {
  alert("Please enter a valid number.");
}
