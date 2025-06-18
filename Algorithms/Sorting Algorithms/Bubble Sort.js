
// Bubble Sort Algorithm Implementation
// define a function called bubbleSort that takes an array as input and returns the sorted array.
// variable isSorted is initialized to false to track if the array is sorted.
// A while loop runs until isSorted is true, indicating that the array is sorted.
// Inside the while loop, a for loop iterates through the array, comparing adjacent elements.
// If two elements are in the wrong order, they are swapped.
//return the sorted array after the while loop completes.


function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];  
        isSorted = false;  
      }
    }
  }
  return array;
}

// Example:
console.log(bubbleSort([5, 1, 9, 4, 3, 7]));  // → [1, 3, 4, 5, 7, 9]
