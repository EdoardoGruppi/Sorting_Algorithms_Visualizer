export function performMergeSort(array) {
  const animations = [];
  // Base case or terminating case
  if (array.length < 2) return array;
  const arrayCopy = array.slice();
  // Otherwise divide the array into two parts
  mergeSortHelper(array, 0, array.length - 1, arrayCopy, animations);
  return animations;
}

function mergeSortHelper(mainArray, start, end, arrayCopy, animations) {
  // Return if a given array has only one value
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  // Divide and operate recursively on the two halves of the passed array
  mergeSortHelper(arrayCopy, start, middle, mainArray, animations);
  mergeSortHelper(arrayCopy, middle + 1, end, mainArray, animations);
  // Merge the two subarrays
  merge(arrayCopy, start, middle, end, mainArray, animations);
}

function merge(arrayCopy, start, middle, end, mainArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;
  // Compare the two subarrays and push the smaller element in the first position of the two arrays
  // Do so until one of the two arrays has no items
  while (i <= middle && j <= end) {
    animations.push([i, j, 0]);
    if (arrayCopy[i] <= arrayCopy[j]) {
      animations.push([k, arrayCopy[i], 1]);
      mainArray[k++] = arrayCopy[i++];
    } else {
      animations.push([k, arrayCopy[j], 1]);
      mainArray[k++] = arrayCopy[j++];
    }
  }
  // Push the remaining elements from one of the two array
  // The while loop on the empty array is simply skipped
  while (i <= middle) {
    animations.push([k, arrayCopy[i], 1]);
    mainArray[k++] = arrayCopy[i++];
  }
  while (j <= end) {
    animations.push([k, arrayCopy[j], 1]);
    mainArray[k++] = arrayCopy[j++];
  }
}
