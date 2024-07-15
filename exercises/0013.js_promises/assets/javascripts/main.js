

// Example 01:

let number=5;


const promise01=new Promise((resolve,reject)=>{
	if(number>0){
		resolve(()=>{
			console.dir(2+2);
		});
	}else{
		reject(()=>{
			console.dir(2+1);
		});
	}
});


promise01
	.then((value)=>{
		value();
	})
	.catch((error)=>{
		error();
	});









// Example 02:

// Conditions
const fees=50;
const marks=80;
function bothConditionsMet(){
	if(fees>=50 && marks>=80){
		bothConditionsMet=true;
	}else{
		bothConditionsMet=false;
	}
}

// Making 3 promises as follows
// Course enrollment
function enrollment(){
	const promise=new Promise((resolve,reject)=>{
		if(fees>=50){
			resolve(console.dir(`You have successfully enrolled the course!`));
		}else{
			reject(console.dir(`Sorry, you haven't enrolled the course yet.`));
		}
	});
	
	return promise;
}



// Course completion
function completion(){
	const promise=new Promise((resolve,reject)=>{
		if(marks>=80){
			resolve(console.dir(`Congratulation! You have successfully passed the exam.`));
		}else{
			reject(console.dir(`Sorry, you could not pass the exam, better luck next time.`));
		}
	})

	return promise;
}



// Course Certificate
function certificate(){
	const promise=new Promise((resolve,reject)=>{
		if(bothConditionsMet){
			resolve(console.dir(`Please collect your certificate.`));
		}else{
			reject(console.dir(`Sorry the certificate isn't available.`));
		}
	});

	return promise;
}



// Executing the promises sequentially 
enrollment() // Enrollment Function called
	.then(completion) // Completion Function called
	.then(certificate) // Certificate Function called	
	.catch((error)=>{
		error;
	}); // Any Errors will be caught here