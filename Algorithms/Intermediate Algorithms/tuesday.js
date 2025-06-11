// Find the longest worde inside the string
// defin a variable hold the sring as a array
// define A function take the string as aparameter
//defin a variable take and empty string
//for loop to iterate through the string
//if condition to check the longest word inside the string
//return the result 


/* function longestWord(str){
    const word =str.split(" ");
    let string = "  ";
    for(i = 0; i < word.length; i++){
        if(string < word[i].length){
            string = word[i].length;
        }
    }
    return string ;
} 

console.log(
  longestWord(
    "Hello guys this is geeksforgeeks where students learn programming"
  )
);
 */
 
function longestWord(str){
    const word = str.split(" ");
    let string = 0;
    for(i = 0; i < word.length; i++){
        if(string < word[i].length){
            string = word[i].length;
        }
    }
    return string ;
} 

console.log(
  longestWord(
    "Hello guys this is geeksforgeeks where students learn programming"
  )
);  
                 // make the result as string
/* function findLongestWord(str) {
  const words = str.split(/\s+/); // split on any whitespace
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */


 