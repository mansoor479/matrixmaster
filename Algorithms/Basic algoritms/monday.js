
//Write a program using JavaScript that will print all the numbers from 1 to 135.

for (let i = 1; i <= 135; i++) {
    console.log(i);
}


//Print Odd Numbers 1 - 135
//Write a program using JavaScript that will print all the odd numbers from 1 to 135.

for (let i = 1; i <= 135; i += 2) {
    console.log(i);
}

//3. Sum of Printed Numbers

//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

/* Number is: 0 Sum: 0
Number is: 1 Sum: 1
Number is: 2 Sum: 3
Number is: 3 Sum: 6 */



let sum = 1;
for (let i = 0; i <= 135; i++) {
    sum += i;
    console.log(`Number is: ${i} Sum: ${sum}`);
} 
 

//4. Print the elements of an array

//Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all siz
const X = [1, 4, 2, 12];
for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
}


//5. Find Max

//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const c = [2, -3, -1];
console.log("Max value is:", findMax(c));

//6. Get Average

//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.


function getAverage(arr) {
    if (arr.length === 0) return null;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Example usage:
const y = [2, 1, 3];
console.log("Average is:", getAverage(y));



//7. Eliminate the Negatives

//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be

function eliminateNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

// Example usage:
const d = [2, -1, 4, -3];
console.log(eliminateNegatives(d)); // Output: [2, 0, 4, 0]



//8. Number to String

//Write a program that takes an array of numbers and turns the negative values into strings.

function convertNegativesToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Turing';
        }
    }
    return arr;
}

// Example usage:
const x = [1, -4, 0, -1];
console.log(convertNegativesToString(x)); // Output: [1, 'Turing', 0, 'Turing']
