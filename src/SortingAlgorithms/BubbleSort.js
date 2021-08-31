export function performBubbleSort(array) {
  const animations = [];
  let check = true;
  // Perform this loop until no swap occurs in the entire while body
  while (check) {
    // Variable useful to understand when two items swap
    check = false;
    for (let idx = 0; idx < array.length - 1; idx++) {
      // The swap happens only if an element is greater than that one position after
      if (array[idx] > array[idx + 1]) {
        animations.push([idx, idx + 1, 1]);
        let temp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = temp;
        check = true;
      } else {
        animations.push([idx, idx + 1, 0]);
      }
    }
  }
  return animations;
}
