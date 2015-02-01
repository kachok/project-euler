/*
Non-abundant sums
Problem 23

A perfect number is a number for which the sum of its proper divisors is exactly
equal to the number. For example, the sum of the proper divisors of 28 would
be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and
it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
that can be written as the sum of two abundant numbers is 24. By mathematical
analysis, it can be shown that all integers greater than 28123 can be written as
the sum of two abundant numbers. However, this upper limit cannot be reduced any
further by analysis even though it is known that the greatest number that cannot be
expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two
abundant numbers.
*/

package main

import "fmt"

const limit = 28123

//cache of d(n) for n form 1 to 28123
var d_dump [limit]int

func f(n, m int) bool {
	if n%m == 0 {
		return true
	}
	return false
}

//d(n) sum of n's proper divisors
func d(n int) (sum int) {
	if d_dump[n] != 0 {
		sum = d_dump[n]
		//fmt.Println("cache hit: ",n)

	} else {
		sum = 0
		for i := 1; i < n; i++ {
			if f(n, i) {
				sum += i
			}
		}
		d_dump[n]=sum
		//fmt.Println("cache miss: ",n)
	}
	return sum
}

//returns if number is perfect
func pn(n int) bool {
	return d(n) == n
}

//returns if number is perfect, abundant or deficient
func pn2(n int) (r int) {
	dn := d(n)

	if dn == n {
		r = 0
	} else if dn < n {
		r = -1
	} else {
		r = 1
	}

	return
}

//is n sum of two abundant numbers
func sumoftwo(n int) (r bool) {
	r = false
	for i := 1; i < n; i++ {
		a := i
		b := n - i
		if pn2(a) == 1 && pn2(b) == 1 {
			r = true
			return
		}
	}
	return
}

func main() {

	sum := 0
	// <=28123
	for i := 1; i <=28123; i++ {
		if !sumoftwo(i) {
			sum += i
			//fmt.Println("not sum of two abundant numbers - ", i)
		} else {
			//fmt.Println(">> ", i)
		}

	}

	fmt.Println("sum: ", sum)
}
