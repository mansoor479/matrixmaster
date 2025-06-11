                       //Sum All Numbers in a Range

// define an function take an array as parameter
// define a variables to min and max by using the Math method
// defin a variable to take the result
// for loop to iterate through the array
// return the result 




function sumAll(arr) {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  let total = 0;

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
}

// Examples
console.log(sumAll([1, 4]));  // → 10 (1 + 2 + 3 + 4)
console.log(sumAll([4, 1]));  // → 10 (order doesn’t matter)
