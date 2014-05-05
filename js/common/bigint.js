//arithmetics with big integers

function BigInt(str, len){
	this.str=str.trim();
	//this.num=new Array(len);
	this.num=Array.apply(null, new Array(len)).map(Number.prototype.valueOf,0);
	this.len=len;

	var i;

	for (i=str.length-1; i>=0;i--){
		this.num[str.length-i-1]=parseInt(this.str[i]);
	}

	//console.log("num; ", this.num);
	//console.log("str; ", this.str);
	//console.log("len; ", this.len);
}

BigInt.prototype.clone = function() {
	var c=new BigInt(this.toString(), this.len);
	return c;
}


BigInt.prototype.add = function(num2) {
	//add another big number
	var i;
	var sum=Array.apply(null, new Array(this.len)).map(Number.prototype.valueOf,0);
	
	for (i=0;i<this.len;i++){
		sum[i] = this.num[i]+num2.getArray()[i];
	}


	for (i=0;i<this.len-1;i++){
		if (sum[i]===0) continue;
		var r = sum[i] % 10;
		var d = (sum[i]-r) / 10;

		//console.log(sum);
		//console.log(this.num);
		//console.log(i,r,d,sum[i],this.num[i],this.num[i+1]);

		this.num[i]=r;
		
		//console.log(this.num[i+1]);

		sum[i+1]=sum[i+1]+d;
		//console.log(i,r,d,sum[i],this.num[i],this.num[i+1]);
		//console.log(this.num);
		//console.log(">");
		
		//console.log(this.num[i+1]);
		//console.log(this.num);
	}

	//console.log(this.num);

	//console.log("old str ",this.str);
	this.updateString();
	//console.log("new str ",this.str);

}

BigInt.prototype.multBy2 = function() {
	//multiply by another big number
	var i;
	var subprod=Array.apply(null, new Array(this.len)).map(Number.prototype.valueOf,0);
	
	for (i=0;i<this.len;i++){
		subprod[i] = this.num[i]*2;
	}

	for (i=0;i<this.len-1;i++){
		if (subprod[i]===0) continue;
		var r = subprod[i] % 10;
		var d = (subprod[i]-r) / 10;
		this.num[i]=r;
		
		subprod[i+1]=subprod[i+1]+d;
	}

	this.updateString();
}

BigInt.prototype.multByNum = function(n) {
	//multiply by another integer

	var zero = new BigInt("0",this.len);

	var digits=n.toString();
	console.log(digits, digits.length);
	var tens=1;
	
	for (var i=digits.length-1;i>=0;i--){
		console.log("> ",digits[i],tens);
		console.log("this: ",this.toString());
		
		if (digits[i]!=="0") {
			var c = this.clone();	
			console.log("c1: ",c.toString());
			c.multByN(parseInt(digits[i]));
			console.log("c2: ",c.toString());
			for (var k=1; k<tens;k++) c.multBy10();
			console.log("c3: ",c.toString());
			console.log("this: ",this.toString());

			zero.add(c);
			console.log("zero: ",zero.toString());
			console.log("this: ",this.toString());
		}
		tens=tens+1;
	}

	this.num=zero.num;
	this.len=zero.len;
	this.str=zero.str;

}

BigInt.prototype.multByN = function(n) {
	//multiply by number (1 to 9)
	var i;
	var subprod=Array.apply(null, new Array(this.len)).map(Number.prototype.valueOf,0);
	
	//handling *0
	if (n===0) {
		this.updateString();
		return;
	}

	for (i=0;i<this.len;i++){
		subprod[i] = this.num[i]*n;
	}

	for (i=0;i<this.len-1;i++){
		if (subprod[i]===0) continue;
		var r = subprod[i] % 10;
		var d = (subprod[i]-r) / 10;
		this.num[i]=r;
		
		subprod[i+1]=subprod[i+1]+d;
	}

	this.updateString();
}

BigInt.prototype.multBy10 = function() {
	//multiply by ten
	var i;
	
	for (i=this.len-2;i>=0;i--){
		this.num[i+1] = this.num[i];
	}
	this.num[0]=0;
	
	this.updateString();
}

//updates string representation of number
BigInt.prototype.updateString = function() {
	this.str="";
	for (i=this.len-1; i>=0; i--){
		if (this.num[i]!==0 || this.str.length>0) this.str=this.str+this.num[i];
	}
}

//returns string representation of number
BigInt.prototype.toString = function() {
	return this.str;
}

//returns array representation of number
BigInt.prototype.getArray = function() {
	return this.num;
}

module.exports=BigInt;