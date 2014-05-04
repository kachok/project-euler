/*

Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

var n = 2000000;
//var primes=[2, 3, 5, 7, 11, 13];

//var m=13;
var primes=[2, 3];

var m=3;

while (primes[primes.length-1]<n){
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

//console.log(primes);
console.log("last one: "+primes[primes.length-2]); //last one is over 2000000
console.log("length: "+primes.length);

var i;
var sum=0;
for (i=0;i<primes.length-1;i++){
	//console.log(i, primes[i]);
	sum=sum+primes[i];
}
console.log("sum: "+sum);