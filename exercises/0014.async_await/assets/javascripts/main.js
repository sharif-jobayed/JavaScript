

// Product puchase

// Go to shop
let atShop=true;
function toShop(){
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(atShop){
				resolve(console.dir(`You have reached the Shop! Now, please select a product.`));
			}else{
				reject(console.dir(`Sorry, you haven't reached the shop yet.`));
			}
		});
		},2000);
	return promise;
}




// Select a product
let product=`Gamepad`;
function select(){
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(product==`Gamepad`){
				resolve(console.dir(`You have choosen a Gamepad!`));
			}else{
				reject(console.dir(`You haven't picked a Gamepad yet.`));
			}
		},3000);
	});
	return promise;
}




// Take the product to the counter
let Counter=true;
function atCounter(){
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Counter){
				resolve(console.dir(`You are at the counter now, please pay the price.`));
			}else{
				reject(console.dir(`Please go to the counter to pay the price.`));
			}
		},1000);
	});
	return promise;
}




// Pay for the product
let price=2200;
function payment(){
	const promise=new Promise((resolve,reject)=>{
		switch(price){
			case 2200:resolve(console.dir(`Thanks, you have paid for the Gamepad, it's your now!`));
			break;

			default:reject(console.dir(`Please pay BDT2200 for the Gamepad to the counter.`));
		}
	});
	return promise;
}




// Return home
let home=false;
function backHome(){
	const promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(home){
				resolve(console.dir(`You have successfully bought a Gamepad & got back home, Good!`));
			}else{
				reject(console.dir(`Have you lost the way home? Please follow the map instead.`));
			}
		},2000);
	});
	return promise;
}




// Execute the promises with Async-Await
async function productPurchase(){
	try{
		await toShop();
		await select();
		await atCounter();
		await payment();
		await backHome();
	}catch(error){
		error;
	}
}
productPurchase();
