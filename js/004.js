/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product 
of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var max = 998001 ; // e.g. 999*999
var min = 1000000; // e.g. 100*100

// 997799; largest palindrom in range

function isPalindrome(n){
	var str=""+n;
	//console.log(str);
	if (str[0]==str[5] && str[1]===str[4] && str[2]===str[3]) {return true};

	return false;
}

var i;
var j;

var m=0;

for (i=100;i<1000;i++){
	for (j=100;j<1000;j++){
		if (isPalindrome(i*j)) {
			if (m<i*j) m=i*j;
		}
	}	
}

console.log(m);
