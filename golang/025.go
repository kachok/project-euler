/*
1000-digit Fibonacci number
Problem 25
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

package main

import "fmt"
import "strconv"
//import "math"

const limit = 1000

//struct for realy long numbers
type LongInt struct {
	size   int
	digits [limit + 1]int
}

//max of two int
func max(a, b int) int {
if a < b {
return b
}
return a
}


//sum for long numbers
func sum(a, b LongInt) (c LongInt) {

	var extra int
	extra = 0

	c.size = max(a.size, b.size)
	for i := 0; i < max(a.size, b.size); i++ {

		c.digits[i] = a.digits[i] + b.digits[i] + extra
		extra = 0

		if c.digits[i] > 9 {
			extra = c.digits[i]
			c.digits[i] = c.digits[i] % 10
			extra = (extra - c.digits[i]) / 10
		}
	}

	if extra > 0 {
		c.size += 1
		c.digits[c.size-1] = extra
		extra = 0
	}

	return c
}

func print(n LongInt) (r string) {
	r = ""
	for i := n.size-1; i >= 0; i-- {
		r = r + strconv.Itoa(n.digits[i])
	}

	return r
}

func main() {

	var n LongInt

	n.digits[0] = 1
	n.size = 1

	/*
	for i := 1; i <= 100; i++ {
		n = sum(n, n)

		fmt.Println(i, print(n))
	}
	*/

	fnminus1:=n
	fnminus2:=n
	f:=n

	i:=2
	for {
		i+=1

		f=sum(fnminus1, fnminus2)
		
		fnminus2=fnminus1
		fnminus1=f


		if f.size==1000 {
			fmt.Println(i, print(f))
			break
		}
	}

}
