/*
Even Fibonacci numbers
Problem 2
Each new term in the Fibonacci sequence is generated by adding the previous 
two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

var n =0;
var sum = 0;

var pre1 = 1;
var pre2 = 2;
var n = pre1+pre2;

var sum = pre2; //it is even

while (n<4000000) {
	pre1 = pre2;
	pre2 = n;

	if (n % 2 === 0) sum = sum + n;
	n = pre1+pre2;

}

console.log(sum);