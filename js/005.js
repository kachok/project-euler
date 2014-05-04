/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without 
any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

console.log(1*2*2*2*2*3*3*5*7*11*13*17*19);
/*
1
2
3
4 2*2
5
6 3*2
7
8 2*2*2
9 3*3
10 5*2
11
12 2*2*3
13
14 2*7
15 3*5
16 2*2*2*2
17
18 3*3*2
19
20 5*2*2
*/

// take all primes < 20
// find max(n) such that p^n<=20
// multiply each prime in power of max(n) in our case 2^4 and 3^2 rest are just p^1