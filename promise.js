
let aNumber_0001 = 11;
let aBoolean_0001 = true;

// aPromise_0001
const aPromise_0001 = new Promise((resolve, reject) => {
	if (aBoolean_0001) {
		return resolve(`In the aPromise_0001, the promise is fulfilled!`);
	} else {
		return reject(`In the aPromise_0001, the promise isn't met...`);
	}
});

aPromise_0001
	.then((result) => { console.info(result) })
	.catch((result) => { console.warn(result) })
	.finally((result) => { console.info(result) })
	;

/*--------------------------------------------------------------------------------------------------------*/

// aPromise_0002
const aPromise_0002 = new Promise((resolve, reject) => {
	if (aNumber_0001 > 15) {
		resolve(`In the aPromise_0002, the promise is fulfilled!`);
	} else {
		reject(`In the aPromise_0002, the promise isn't met...`);
	}
});

aPromise_0002
	.then((result) => { console.info(result) })
	.catch((result) => { console.warn(result) })
	.finally((result) => { console.info(result) })
	;

/*--------------------------------------------------------------------------------------------------------*/
