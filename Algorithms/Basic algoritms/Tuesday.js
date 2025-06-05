//. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

let sum = 0;

for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
        sum += i;
    }
}

console.log("Sum is:", sum);


//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

function shiftValues(arr) {
    if (arr.length === 0) return [];
    return arr.reverse();
}

// Example usage:
const X = [2, 1, 6, 4, -7];
console.log(shiftValues(X)); // Output: [-7, 4, 6, 1, 2]



//FizzBuzz

//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".


const result = [];

for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
    } else if (i % 3 === 0) {
        result.push("Fizz");
    } else if (i % 5 === 0) {
        result.push("Buzz");
    } else {
        result.push(i);
    }
}

console.log(result);


//Fibonacci

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
let a = 0, b = 1, sum1 = 0;

while (a < 1000000) {
    sum1 += a;
    let temp = a + b;
    a = b;
    b = temp;
}

console.log("Sum of Fibonacci numbers below 1,000,000:", sum);




//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

function removeNegatives(arr) {
    return arr.filter(num => num >= 0);
}

// Example usage:
const g = [1, -2, 4, 1];
console.log(removeNegatives(g)); // Output: [1, 4, 1]


//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

function censorWord(arr, wordToCensor) {
    return arr.map(word => {
        return word === wordToCensor ? '*'.repeat(word.length) : word;
    });
}

// Example usage:
const f = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
console.log(censorWord(f, 'Program')); // Output: ['Man', 'I', 'Love', 'The', 'Matrix', '*******']
