                        //Fibonacci Sequence



// define  a function take numbers as aparameter
// defin a variable (a,b) for fibonacci squence and 
// for loop to iterate the numbers and the for loop start from the 
// seconde value to the giving number
// return the result




function fib(n) {
  let a = 0, b = 1;
  
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fib(4)); 
console.log(fib(7)); 
console.log(fib(43)); 
console.log(fib(101)); 
console.log(fib(227)); 
