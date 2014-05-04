/*
Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the 
square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers 
and the square of the sum.
*/

var i;

var sum=0;
var sqs=0;

for (i=1;i<=100;i++) {
	sum=sum+i;
	sqs=sqs+i*i;
	console.log(i, sum, sqs);
}

console.log(sum*sum-sqs);