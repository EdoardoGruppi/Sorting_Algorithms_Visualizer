export function performHeapSort(array) {
  const animations = [];
  let arrayLength = array.length;
  // Build heap
  for (let idx = parseInt(arrayLength / 2 - 1); idx >= 0; idx--) {
    heapSortHelper(array, arrayLength, idx, animations);
  }
  // OIterate the elements strating from the last of them
  for (let idx = arrayLength - 1; idx >= 0; idx--) {
    // Swap current root with the end.
    // Remember that when building the heap the biggest number
    // has been moved into the initial position.
    animations.push([0, idx, 1]);
    [array[0], array[idx]] = [array[idx], array[0]];
    // Call Helper function without considering items in position >= idx
    heapSortHelper(array, idx, 0, animations);
  }

  return animations;
}

function heapSortHelper(array, arrayLength, idx, animations) {
  // At the beginning consider the item at idx as largest
  let largest = idx;
  let left = 2 * idx + 1;
  let right = 2 * idx + 2;
  // Compare left child with the new root
  if (left < arrayLength && array[left] > array[largest]) {
    animations.push([left, largest, 0]);
    largest = left;
  }
  // Compare right child with the new root
  if (right < arrayLength && array[right] > array[largest]) {
    animations.push([right, largest, 0]);
    largest = right;
  }
  // Take the smallest child index and swap it with the root
  if (largest !== idx) {
    animations.push([largest, idx, 1]);
    [array[largest], array[idx]] = [array[idx], array[largest]];
    // Recursively compare the changed root with the other elements
    heapSortHelper(array, arrayLength, largest, animations);
  }
}
