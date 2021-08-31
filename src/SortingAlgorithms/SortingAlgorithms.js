export function performMergeSort(array) {
  const animations = [];
  // Base case or terminating case
  if (array.length < 2) return array;
  const arrayCopy = array.slice();
  mergeSortHelper(array, 0, array.length - 1, arrayCopy, animations);
  return animations;
}

function mergeSortHelper(mainArray, start, end, arrayCopy, animations) {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(arrayCopy, start, middle, mainArray, animations);
  mergeSortHelper(arrayCopy, middle + 1, end, mainArray, animations);
  merge(arrayCopy, start, middle, end, mainArray, animations);
}

function merge(arrayCopy, start, middle, end, mainArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;
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
  while (i <= middle) {
    animations.push([k, arrayCopy[i], 1]);
    mainArray[k++] = arrayCopy[i++];
  }
  while (j <= end) {
    animations.push([k, arrayCopy[j], 1]);
    mainArray[k++] = arrayCopy[j++];
  }
}
