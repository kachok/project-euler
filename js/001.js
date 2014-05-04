/*
Multiples of 3 and 5

Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

"use strict;"

var i;

var sum = 0;

for (i=1; i<1000;i++)
{
	if (i % 3 ===0 ) {
		sum = sum +i;
		console.log(i+" :3 ("+sum+")");
	}
	else if (i % 5 === 0) {
		sum = sum + i;
		console.log(i+" :5 ("+sum+")");
	}
	else {
		console.log(i+" :none");
	}

}

console.log(sum);
