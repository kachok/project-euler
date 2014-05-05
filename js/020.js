/*
Factorial digit sum
Problem 20
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
var BigInt=require("./common/bigint.js");


var f=new BigInt("1",500);


for (var i=2;i<=100;i++){
	
	f.multByNum(i);
//console.log(f.toString());
}


//var f=new BigInt("2",10);
//console.log(f.clone().toString());
//f.multByNum(104);

/*


console.log(f.toString());
f.multByN(2);
console.log(f.toString());
f.multByN(3);
console.log(f.toString());
f.multByN(4);
console.log(f.toString());
f.multBy10();
console.log(f.toString());
f.multBy10();
console.log(f.toString());
f.multBy10();
*/

console.log(f.toString());

var sum=0;
for (var i=0;i<f.toString().length;i++){
	sum=sum+parseInt(f.toString()[i]);
}


console.log(sum);

