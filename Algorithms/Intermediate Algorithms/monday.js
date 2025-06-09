//Largest Number in Array
////
//define a function take an array as a parameter
//define a variable as empty array (for the result we got it )
//for loop to iterate through the array
// for loop 
// if conditon to check the bigger number (condition = true then push the result in the empty array)
//return the result
//
function largeNum(arr){
    let larg =[]
    for(let i = 0; i < arr.length; i++){
        larg.push(arr[i][0])
        for(let j = 0; j < arr[i].length; j++){
            if(larg[i]<arr[i][j]){
                larg[i] = arr[i][j]
            }
        }
    }
        return larg
}
let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
console.log(largeNum(array))
