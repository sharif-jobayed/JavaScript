

// Ticket booking example

/* W R O N G  Promise scope!!
// Go to station
let reachedStation=true;
function atStation(){
	setTimeout(()=>{
		const promise=new Promise((resolve,reject)=>{
			if(reachedStation){
				resolve(console.dir(`You have reached the station in time.`));
			}else{
				reject(console.dir(`You haven't reached the station in time.`));
			}
		});
		return promise;
	},2000);
}
*/

// Go to station
let reachedStation=true;
function atStation(){
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(reachedStation){
				resolve(console.dir(`You have reached the station in time!`));
			}else{
				reject(console.dir(`You haven't reached the station yet.`));
			}
		},3000);
	});
	return promise;
}





// Book a ticket
const ticketPrice=500;
function bookTicket(){
	const promise=new Promise((resolve,reject)=>{
		if(ticketPrice==500){
			resolve(console.dir(`You have booked a ticket!`));
		}else{
			reject(console.dir(`Sorry, you haven't booked a ticket yet.`));
		}
	});
	return promise;
}




// Collect the ticket
function collectTicket(){
	const promise=new Promise((resolve,reject)=>{
		if(reachedStation&&ticketPrice==500){
			resolve(console.dir(`Your ticket is ready to collect.`));
		}else{
			reject(console.dir(`Sorry, the ticket isn't ready yet.`));
		}
	});
	return promise;
}




// Execute the promises
atStation()
	.then(bookTicket)
	.then(collectTicket)

	.catch((error)=>{
		error;
	});