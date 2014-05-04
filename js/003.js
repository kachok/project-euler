/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var n=600851475143;

var f=Math.floor(Math.sqrt(n)+1);

console.log(n);
console.log(f);

function isPrime(p) {
	var f=Math.floor(Math.sqrt(p)+1);
	var j;

	for (j=2;j<=f;j++){
		if ( p % j === 0) {
			return false;
		}
	}
	return true;
}

var i;
for (i=f; i>1;i--){
	if (n % i === 0) {
		if (isPrime(i)) console.log("prime factor: "+i);
		else console.log("factor: "+i);
	}
}
