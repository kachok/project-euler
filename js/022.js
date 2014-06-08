/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing 
over five-thousand first names, begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, multiply this value by its 
alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is 
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

var fs=require("fs");

var data = fs.readFileSync("022.txt").toString();


function getAlphaValue(name){
	var val=0;

	for (var j=0; j<name.length;j++){
		val=val+name.charCodeAt(j)-64;
	}

	return val;
}

var names = data.split(",");

for (var i=0; i<names.length; i++) {
	names[i]=names[i].replace(/"/g,'');
}

names.sort();

//console.log(names);


var total=0;

for (var i=0; i<names.length; i++) {
	var val=getAlphaValue(names[i]);
	total=total+(i+1)*val;
}

console.log(total);