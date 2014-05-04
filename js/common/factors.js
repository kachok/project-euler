//print factors of a number
module.exports.factors = function factors(n){
	var i;

	for (i=n; i>1;i--){
		if (n % i === 0 ) {console.log("factor: "+i);}
	}
	
	return "ok";
}

module.exports.factorsCount = function factorsCount(n){
	var count=0;
	var i;

	for (i=n-1; i>0;i--){
		if (n % i === 0 ) {
			//console.log("factor: "+i); 
			count=count+1;
		}
	}
	
	return count;
}