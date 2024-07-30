// Considering the speeds of two competing turtles and turtle A's advantage over turtle B, create a function that calculates whether turtle B will catch turtle A and, if so, how long it will take.

function race(v1, v2, g) {
  if (v1 >= v2) {
    return [-1, -1, -1];
  }

  const timeInHours = g / (v2 - v1);

  const hours = Math.floor(timeInHours);
  const minutes = Math.floor((timeInHours - hours) * 60);
  const seconds = Math.floor(((timeInHours - hours) * 60 - minutes) * 60);

  return [hours, minutes, seconds];
}
