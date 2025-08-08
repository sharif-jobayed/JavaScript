
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
	.catch((error) => { console.warn(error) })
	.finally(() => { console.info(`Promise is done.`) })
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
	.catch((error) => { console.warn(error) })
	.finally(() => { console.info(`Promise is done.`) })
	;

/*--------------------------------------------------------------------------------------------------------*/

// Add numbers to a number
const getANumber = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(aNumber_0001)
	}, 2000);
});

const add12 = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(number + 12)
		}, 1500);
	});
}

const add28 = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(number + 28)
		}, 1000);
	});
}

getANumber
	.then((numberFromANumber) => {
		return add12(numberFromANumber);
	})
	.then((numberFromAdd12) => {
		return add28(numberFromAdd12);
	})
	.then((grandTotal) => {
		console.info(grandTotal);
	})
	.catch((error) => {
		console.error(error);
	})
	.finally(() => {
		console.info(
			`The promise is over.`
		);
	})
	;

/*--------------------------------------------------------------------------------------------------------*/
