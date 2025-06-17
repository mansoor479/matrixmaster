
// This function calculates the sum of all prime numbers up to a given number n.
// It uses the Sieve of Eratosthenes algorithm to efficiently find all prime numbers and then sums them up.
// for loop iterates through numbers from 2 to n, checking if each number is prime.
// If a number is prime, it is added to the sum.
// The function returns the total sum of all prime numbers found.









/* function sumPrime(num){
   
    if(num < 2){
        return 0;
    }
    const primNumber =[];
    for(let i = 2; i <= num; i++){
        let isprime = false;
        for(const p of primNumber){
            if(i % p === 0){
                isprime = true;
                
                break;
            }

        }
        if(!isprime){
            primNumber.push(i);
        }
        
    }
    let sum =0;
    for(const p of primNumber){
        sum+=p;
    } 
    
    
    return  sum;
    
}
console.log(sumPrime(10)); */

function sumPrimesUpTo(n) {
  const isPrime = Array(n+1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i*i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i*i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce((sum, prime, i) => prime ? sum + i : sum, 0);
}
console.log(sumPrimesUpTo(10));
