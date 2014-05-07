/*
Lexicographic permutations
Problem 24
A permutation is an ordered arrangement of objects. For example, 3124 is one possible 
permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically 
or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function isPerm(num){
	var digits=[0,0,0,0,0,0,0,0,0,0];
	var s=num.toString();

	if (s.length===9) digits[0]=1;

	for (var k=0;k<s.length;k++){
		digits[s[k]]=digits[s[k]]+1;
	}

	//console.log(num);
	//console.log(digits);

	for (var j=0;j<10;j++){
		if (digits[j]!==1) return false;
	}

	return true;
}

var count=0;
for (var i=123456789;i<9876543210;i++)
{
	if (isPerm(i)) {
		console.log(i, count);
		count=count+1;
		if (count===1000000) break;
	}
}