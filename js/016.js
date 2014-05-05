/*
Power digit sum
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/
var BigInt=require("./common/bigint.js");


var prod=new BigInt("2",400);

var count=1;
for (var i=0;i<999;i++){
	count=count+1;
	prod.multBy2();
}

console.log(prod.toString());

var sum=0;
for (var i=0;i<prod.toString().length;i++){
	sum=sum+parseInt(prod.toString()[i]);
}


console.log(sum, count);