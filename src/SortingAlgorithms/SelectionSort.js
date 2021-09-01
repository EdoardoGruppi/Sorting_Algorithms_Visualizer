export function performSelectionSort(array) {
  const animations = [];
  for (let i = 0; i < array.length; i++) {
    // For every iteration find the minimum element in the array
    let min = i;
    // Cycle to find the minimum
    for (let j = i + 1; j < array.length; j++) {
      animations.push([i, min, 0]);
      if (array[j] < array[min]) {
        min = j;
      }
    }
    animations.push([i, min, 0]);
    // Swap the item in the current position with the minimum one only
    // if they do not correspond to the same element.
    if (min !== i) {
      animations.push([i, min, 1]);
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return animations;
}
