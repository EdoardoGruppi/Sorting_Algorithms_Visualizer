export function performShellSort(array) {
  const animations = [];
  const arrayLength = array.length;

  // It works as the insetion sort algorithm performed using decreasing intervals
  // Rearrange elements at each n/2, n/4, n/8, ... intervals
  let gap = Math.floor(arrayLength / 2);
  while (gap > 0) {
    for (let idx = gap; idx < array.length; idx++) {
      let temp = array[idx];
      let prev = idx - gap;
      // Move at the left the current item unitl it succeeds only smaller numbers
      while (prev > -1 && temp < array[prev]) {
        animations.push([idx, prev, 0]);
        // Perform the swap between the two compared items
        animations.push([prev, prev + gap, 1]);
        [array[prev + gap], array[prev]] = [array[prev], array[prev + gap]];
        prev -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }

  return animations;
}
