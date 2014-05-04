/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var n = 10001;
var primes=[2, 3, 5, 7, 11, 13];

var m=13;

while (primes.length<n){
	m=m+2; //skip even numbers

	var i;
	var isPrime=true;
	for(i=0;i<primes.length;i++){
		if (m % primes[i] === 0) {
			isPrime=false;
			break;
		}
	}	
	if (isPrime) primes.push(m);
}

console.log(primes);
console.log(primes[primes.length-1]);
console.log(primes.length);