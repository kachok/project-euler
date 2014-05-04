//print factors of a number
module.exports.factors = function factors(n){
	var i;

	for (i=n; i>1;i--){
		if (n % i === 0 ) {console.log("factor: "+i);}
	}
	
	return "ok";
}