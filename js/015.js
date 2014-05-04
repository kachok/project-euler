//40!/(20!*20!)
//http://en.wikipedia.org/wiki/Permutations#Permutations_of_multisets

function factorial(n) {
	if (n===1) return 1;
	else return n*factorial(n-1);
}

console.log(factorial(40)/(factorial(20)*factorial(20)));