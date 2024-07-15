

// Example 01:

function mainFunction(a,b,c){
	a();
	b();
	c();
}




function one(){
	setTimeout(
		function(){
			let var1=2;
			let var2=3;
			let var3_1=var1+var2;
			console.dir(var3_1)
		},3000
	);
}

function two(){
	let var3=`This is Function Two`;
	console.dir(var3);
}

function three(){
	let var4=`This is Function Three`;
	console.dir(var4);
}




mainFunction(one,two,three);









// Example 02:

function ab(){
	
	console.dir(`Rajib is ${bc()}`);

	function bc(cd){

		cd=`Awesome!`;
		return cd;

	}
}

ab();









// Example 03:

function a(){

	let three=b()+5;

	function b(){

		let two=c()+5;

		function c(){

			let one=5;
			return one;

		}

		return two;

	}

	console.dir(three);

}

a();









