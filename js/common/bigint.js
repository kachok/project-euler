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