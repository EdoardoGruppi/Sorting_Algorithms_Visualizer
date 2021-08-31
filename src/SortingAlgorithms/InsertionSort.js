export function performInsertionSort(array) {
  const animations = [];

  for (let idx = 1; idx < array.length; idx++) {
    let temp = array[idx];
    let prev = idx - 1;
    // Move at the left the current item unitl it succeeds only smaller numbers
    while (prev > -1 && temp < array[prev]) {
      // Perform the swap between the two compared items
      animations.push([prev, prev + 1, 1]);
      temp = array[prev + 1];
      array[prev + 1] = array[prev];
      array[prev] = temp;
      prev--;
    }
  }
  return animations;
}
