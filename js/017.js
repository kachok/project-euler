/*
Number letter counts
Problem 17
If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.
*/


function toString3(num){
	switch (num) {
		case 1: return "one"; 
		case 2: return "two"; 
		case 3: return "three"; 
		case 4: return "four"; 
		case 5: return "five"; 
		case 6: return "six"; 
		case 7: return "seven"; 
		case 8: return "eight"; 
		case 9: return "nine"; 
		case 10: return "ten"; 
		case 11: return "eleven"; 
		case 12: return "twelve"; 
		case 13: return "thirteen"; 
		case 14: return "fourteen"; 
		case 15: return "fifteen"; 
		case 16: return "sixteen"; 
		case 17: return "seventeen"; 
		case 18: return "eighteen"; 
		case 19: return "nineteen"; 
	}
}


function toString2(num){
	if (num<20) return toString3(num);
	else {
		var tens=(num-(num %10))/10;
		var other = "";
		if ((num % 10)!==0) other=" "+toString3(num % 10);

		switch (tens) {
			case 2: return "twenty"+other;
			case 3: return "thirty"+other;
			case 4: return "forty"+other;
			case 5: return "fifty"+other;
			case 6: return "sixty"+other;
			case 7: return "seventy"+other;
			case 8: return "eighty"+other;
			case 9: return "ninety"+other;
		}
	}		
}

function toString(num){
	if (num===1000) return "one thousand";

	if (num>=1 && num<=99) return toString2(num);


	if (num > 99) {
		var hundreds = (num-(num % 100))/100;

		var other ="";
		if (num % 100 !==0) {
			other = " and "+toString2(num%100);
		}

		return toString3(hundreds)+" hundred"+other;
	}
		
}

var sum=0;
for (var i=1; i<=1000;i++) {
	var sp=toString(i);
	console.log(i, sp);

	sp=sp.replace(/ /g,"");
	sum=sum+sp.length;
	console.log(sp,sp.length);
}

console.log(sum);
