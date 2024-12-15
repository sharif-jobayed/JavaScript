


// console.log(`Callback script is connected`);

const payment=false;
const marks=90;

function course(){

	//enroll
	function enroll(callback){
		console.log(`Course enrollment in progress`);

		setTimeout(()=>{
			if(payment){
				callback;
			}else{
				console.log(`Sorry, payment is pending.`);
			}
		},2000);		
	}

	//progress
	function progress(callback){
		console.log(`Course progress is ongoing.`);

		setTimeout(()=>{
			if(marks>=80){
				callback;
			}else{
				console.log(`Sorry, you did not pass.`);
			}
		},3000);
	}


	//getCertificate
	function getCertificate(){
		console.log(`Prepering the certificate.`);

		setTimeout(()=>{
			console.log(`Your certificate is ready, contact to collect.`);
		},1000);
	}

	enroll(progress(getCertificate));

}

course();