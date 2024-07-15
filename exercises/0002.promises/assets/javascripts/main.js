
// A Veriable
let v = 50;

// Create a Promise
let p = new Promise((resolve, reject) => {
	if (v === 50) {
		resolve(`The "v" veriable is 50`);
	} else {
		reject(`The "v" veriable is not 50`);
	}
});

// Output the Promise
p
	.then((message/*then takes "resolve" into the message*/) => {
		console.log(message);
	})
	.catch((message/*catch takes "reject" into the message*/) => {
		console.log(message);
	});

/*----------------------------------------------------------------------*/

let a = 80;

var p1 = new Promise((parameterA, parameterB) => {
	if (p1 === 78) {
		parameterA(`The veriable "a" is equal to 78`);
	} else {
		parameterB(`The veriable "a" is not equal to 78`);
	}
});

p1
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});

/*----------------------------------------------------------------------*/

let value = 1000;

const PROMISE_01 = new Promise((resolve, reject) => {
	if (value <= 1000) {
		resolve("Promise resolved");
	} else if (value > 1000) {
		reject("Promise rejected");
	} else {
		throw new Error("Promise returns invalid");
	}
});

PROMISE_01
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("The promise has been settled.");
	});

/*----------------------------------------------------------------------*/

let value2 = 800;

Promise.resolve(value2)
	.then(() => {
		console.log(`Short promise works!`)
	});

/*----------------------------------------------------------------------*/
