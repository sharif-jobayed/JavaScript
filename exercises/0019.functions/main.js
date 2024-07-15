

let a=0;
let b=10;

function z(a,b,c){
	a=a; // The left side is variable `a` & the right side is parameter `a`.

	return(a+b);
}

console.dir(z(a,15));
console.dir(typeof(z));