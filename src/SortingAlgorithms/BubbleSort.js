export function performBubbleSort(array) {
  const animations = [];
  let check = true;
  while (check) {
    check = false;
    for (let idx = 0; idx < array.length - 1; idx++) {
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

  console.log(array);

  return animations;
}
