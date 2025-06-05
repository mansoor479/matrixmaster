//Declare a function isPalindrome(str) that takes a string as an input.

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


var checkPalindrome = function(word){
var inputWord = word;
var checkString = inputWord.split(" ").join("").toLowerCase();
for(var i = 0; i < checkString.length/2; i++){
    if(checkString[i] != checkString[checkString.length-i-1]){
      return false; 
    }
}
return true;
}
var output = checkPalindrome("rasecar");
console.log(output);



/* 
function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("racecar"));             // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello"));        */        // false
