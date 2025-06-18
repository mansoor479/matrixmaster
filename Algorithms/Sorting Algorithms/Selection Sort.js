//Selection Sort
// Selection Sort Algorithm Implementation
// Define a function called selectionSort that takes an array as input and returns the sorted array.
// A for loop iterates through the array, treating each element as the current minimum.
// Inside the loop, another for loop finds the index of the minimum element in the unsorted
// portion of the array.
// If the current element is not the minimum, it is swapped with the minimum element.
// The process continues until the entire array is sorted.
//return the sorted array after the outer loop completes.


function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;  
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;  
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];  
    }
  }
  return array;
}
// Example:
console.log(selectionSort([5, 1, 9, 4, 3, 7]));  // → [1, 3, 4, 5, 7, 9]
