export function performQuickSort(array) {
  // Animations list
  const animations = [];
  // Creating a stack of the elements to operate with
  let stack = [];
  // Adding the initial array as "unsorted subarray"
  stack.push(0);
  stack.push(array.length - 1);

  // The loop is executed unitl the stack becomes empty
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    let end = stack.pop();
    let start = stack.pop();
    // Find pivot index and move smaller number at the left and vice versa
    let pivotIndex = quickSortHelper(array, start, end, animations);
    // Add the unsorted subarray at the left of the pivot to the stack
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }
    // Add the unsorted subarray at the right of the pivot to the stack
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return animations;
}

function quickSortHelper(array, start, end, animations) {
  // Taking the last element as the pivot
  const pivotValue = array[end];
  // Cursor position starts from the beginning
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    animations.push([i, end, 0]);
    if (array[i] < pivotValue) {
      // Swapping elements if the element is minor than the pivot.
      // The objective is to have smaller number at the beginning.
      animations.push([i, pivotIndex, 1]);
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      // For every item smaller than the pivot, increase the index where
      // the pivot will be inserted at the end of the loop.
      pivotIndex++;
    }
  }
  // Move the pivot value in the middle according to how many
  // smaller numbers have been found.
  animations.push([end, pivotIndex, 1]);
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

  return pivotIndex;
}
