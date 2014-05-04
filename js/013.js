/*
Large sum
Problem 13
Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.


*/

var fs = require("fs");
var data = fs.readFileSync("./js/013.txt").toString();

var lines = data.split("\n");


//console.log(lines);



var BigInt=require("./common/bigint.js");


var sum = new BigInt(lines[0], 60);
for (var i=1;i<lines.length;i++) {
	var num2=new BigInt(lines[i],60);
	sum.add(num2);
}

console.log(sum.toString());

/*
var big = new BigInt(lines[0], 60);
var big2 = new BigInt(lines[1], 60);

console.log(big.toString());
console.log(big2.toString());

big.add(big2);
console.log(big.toString());

console.log("___");

big = new BigInt("199999", 10);
big2 = new BigInt("99999", 10);

console.log(big.toString());
console.log(big2.toString());

//console.log(big.getArray());
//console.log(big2.getArray());

big.add(big2);
//console.log(big.getArray());

console.log(big.toString());
//console.log(big);
*/