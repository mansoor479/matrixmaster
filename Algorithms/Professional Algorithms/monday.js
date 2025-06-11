                 //Game of 3s
//We want to play a "Game of 3s". Here's how you play it:

//First, you pick a random number. Then, repeatedly do the following:

//If the number is divisible by 3, divide it by 3.
//If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
//The game stops when you reach "1". 


//algoritm
//define a function take a number as aparameter
//while loop start at the n  end at 1
// if condition to check if the n is divided by 3
//true then divided by 3
//fals to check the reminder if it is = 1
//true subtract 1 from the n and divided by 3
//false add 2 to the n and divided by 3
// return




function playGameOf3s(n) {
    while (n > 1) {

    if (n % 3 === 0) {
      n /= 3;
      console.log("Divisible ", n);
      
    } else if (n % 3 === 1) {
      n = n - 1;
      n /= 3;

      console.log("Subtract 1", n);
    
    } else {
      n = n + 1;
      n/=3;

      console.log("Subtract 1", n);
    }
  }

  return n;
}





playGameOf3s(100);
