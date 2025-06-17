
                                            //Search and Replace

// define an function take a 3 string 
// Check if we need to capitalize the replacement
// Capitalize the first letter of 'after'
// Lowercase the first letter
// Replace the first occurrence of 'before'
// return the result

function myReplace(str, before, after) {
  
  if (before.charAt(0) !== before.charAt(0).toLowerCase()) {
    
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  
  return str.replace(before, after);
}
const result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(result);
