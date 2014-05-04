/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var a,b,c;

for (c=1;c<1000;c++){
	for (b=1;b<c;b++){
		for (a=1;a<b;a++){
			if ((a+b+c===1000) && (a*a+b*b===c*c)) {
				console.log(a,b,c);
				console.log(a*b*c);
			};
		}	
	}
}
