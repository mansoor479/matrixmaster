//Title Case a Sentence
// define a function take a string as parameter
//define a variable str as  an array to containe the giving string in lowercase to changed to uppercase  
// change the firste letter of stringe to cabitale by using string methods in the giving array
//return the array that containe the string transformed

function titleCase(sentence) {
  const str = sentence.toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    return str;
}


console.log(
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(
  titleCase("I'm a little tea pot"));
