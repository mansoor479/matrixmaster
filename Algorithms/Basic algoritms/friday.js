
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
// Your algorithm should do only one iteration of the array (just one for/while loop).
// used for loop
function thirdHighest (input){
    var first =0;
    var second =0;
    var third=0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > first){
            third = second;
            second = first;
            first = input[i];
        }
        else if (input[i] > second) {
            third = second;
            second = input[i];  
        }
        else if (input[i] > third) {
            third = input[i];
        }
    }
    return third;
}
console.log(thirdHighest([2,5,3,1,4]));


//use while loop


function thirdHighest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    let i = 0;
    while (i < arr.length) {
        const num = arr[i];

        // Skip if it's a duplicate of any of the top 3
        if (num === first || num === second || num === third) {
            i++;
            continue;
        }

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }

        i++;
    }

    return third !== -Infinity ? third : null;
}

// Example usage:
console.log(thirdHighest([2,5,3,1,4]));
