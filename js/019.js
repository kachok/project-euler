/*
Counting Sundays
Problem 19
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible
by 400.

How many Sundays fell on the first of the month during the twentieth century 
(1 Jan 1901 to 31 Dec 2000)?

*/

function isLeap(num){
	if (num % 100 ===0) {
		if (num % 400 ===0) return true;
		else return false;

	}
	if (num % 4 === 0) return true;
	return false;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

var start = new Date('1900-01-01T20:00:00');

var init = 1; //Monday of Jan 1, 1900
var offset = 1; //offset count back

console.log(addDays(start, init-offset));

init = init+365; //skipping to Jan 1, 1901 (1900 wasn't a leap year)

var sun=0;

var year;

for (year = 1901; year<=2000; year++){
	console.log("mod: "+init % 7+" | "+addDays(start, init-offset));


	//jan
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//feb
	if (init % 7 === 0) sun=sun+1;
	
	if (isLeap(year)) {
		init=init+29;
	}
	else {
		init=init+28;
	}

	//mar
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//apr
	if (init % 7 === 0) sun=sun+1;
	init=init+30;

	//may
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//jun
	if (init % 7 === 0) sun=sun+1;
	init=init+30;

	//jul
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//aug
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//sep
	if (init % 7 === 0) sun=sun+1;
	init=init+30;

	//oct
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//nov
	if (init % 7 === 0) sun=sun+1;
	init=init+30;

	//dec
	if (init % 7 === 0) sun=sun+1;
	init=init+31;

	//console.log(year, sun, init, init % 7, isLeap(year));
}

console.log(sun);
