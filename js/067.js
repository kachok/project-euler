/*
Maximum path sum II
Problem 67
By starting at the top of the triangle below and moving to adjacent numbers on the row below, 
the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), 
 15K text file containing a triangle with one-hundred rows.

NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route 
to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes 
every second it would take over twenty billion years to check them all. There is an efficient 
algorithm to solve it. ;o)
*/

var fs = require("fs");
var data = fs.readFileSync("./js/067.txt").toString();

var a = [];

var k,l;

var lines = data.split("\n");

//console.log(lines);

for (k=0; k<100;k++){
	var line = lines[k].trim();

	var elements = line.split(" ");

	var arr2=[]
	for (l=0; l<elements.length; l++) {
		var el = parseInt(elements[l]);
		arr2.push(el);
	}

	a.push(arr2);
}

console.log(a);


var i;
var j;

for (i=99;i>=0;i--){
	console.log(a[i]);
	console.log(a[i].length);

	for (j=0;j<(a[i].length)-1;j++){

		var m = Math.max(a[i][j],a[i][j+1]);

		a[i-1][j]=a[i-1][j]+m;

	}
}

console.log(a);

console.log(a[0][0]);