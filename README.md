# Sorting Algorithm Visualizer

[Project](https://github.com/EdoardoGruppi/Sorting_Algorithms_Visualizer) ~ [Visualization Tool](https://edoardogruppi.github.io/Sorting_Algorithms_Visualizer/)

This project aims to provide a clear visualization about how the most widespread sorting algorithms work.

Users can select the number of elements the array should have as well as the animation speed and the algorithm to perform.

## How to run

The Sorting Algorithms Visualiser tool is available at the following GitHub page: https://edoardogruppi.github.io/Sorting_Algorithms_Visualizer/.

## Algorithms

Precisely, the algorithms analysed are the following:

**1. Bubble Sort:** repeatedly swaps adjacent elements if not in order.

**2. Quick Sort:** It works recursively by taking the last element of the analysed collection of items as pivot. Hence, partitions the elements examined around it creating two sequences of numbers that are respectively smaller and grater than the pivot. The algorithm repeats itself until the initial array has been sorted.

**3. Heap Sort:** starts visualizing the items of the array as a particular type of complete binary tree which is referred to as a heap. In this project, the heap version is based on the max-heap property where the greatest number is placed at the root node. As it is probably the most complex algorithm here evaluated, a complete guide to better understand its functioning can be reached at [this link](https://www.programiz.com/dsa/heap-sort).

**4. Merge Sort:** It operates recursively dividing the examined array into two sequences. Once all the subarrays achieved are made up of only one elements,they are joined together in the correct sorting order and following the reverse process.

**5. Selection Sort:** after segmenting the array in two parts (left sorted and initially empty, right unordered), it moves the miminum item from the right subarray to the end of the left sequence.

**6. Insertion Sort:** at the begininning the array is divided into a left sorted segment, which is initially empty, and a right unordered segment. One after the other, the first element in the right sequence is moved in the correct position of the left subarray.

**7. Shell Sort:** is an advancement of the Insertion Sort algorithm that works with element separated by a precise gap. The latter starts from N/2, with N that describes the length of the starting array, and at each iteration is reduced by half.

## Time and Space complexity

|   Algorithm    | Time Complexity | Time Complexity | Time Complexity  | Space Complexity |
| :------------: | :-------------: | :-------------: | :--------------: | :--------------: |
|       -        |      Best       |     Average     |      Worst       |        -         |
|  Bubble Sort   |      O(n)       |     O(n^2)      |      O(n^2)      |       O(1)       |
| Selection Sort |     O(n^2)      |     O(n^2)      |      O(n^2)      |       O(1)       |
| Insertion Sort |      O(n)       |     O(n^2)      |      O(n^2)      |       O(1)       |
|   Merge Sort   |  O(n\*log(n))   |  O(n\*log(n))   |   O(n\*log(n))   |       O(n)       |
|   Quick Sort   |  O(n\*log(n))   |  O(n\*log(n))   |      O(n^2)      |    O(log(n))     |
|   Heap Sort    |  O(n\*log(n))   |  O(n\*log(n))   |   O(n\*log(n))   |       O(1)       |
|   Shell Sort   |  O(n\*log(n))   |  O(n\*log(n))   | O(n\*(log(n))^2) |       O(1)       |

## Additional Notes

Overall, this work also represents a good exercise from which to start practising the knowledge acquired on JavaScript, CSS and ReactJs.

## GIFs

### Setup

![ezgif com-gif-maker](https://user-images.githubusercontent.com/48513387/131824280-27866ba3-1ec6-447b-958e-31ac302a3802.gif)

### Quick Sort Visualization

![ezgif com-gif-maker](https://user-images.githubusercontent.com/48513387/132096886-82785bb4-57a7-4de2-bbd2-77ed1902e3d5.gif)

### Insertion Sort Visualization

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/48513387/132096913-781d3864-fa03-4b03-a8e5-ae71beec6f24.gif)
