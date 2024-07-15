

let anArray=[5,8,9,6,7,2,3];



// For Loop
console.log(`With "for" Loop:`)

for(let a=0;a<anArray.length;a++){
	let current=anArray[a]+100;
	console.log(current);
}




// For Each Loop
console.log(`With "forEach" Loop:`)

anArray.forEach((item)=>{
	let current=item+100;
	console.log(current);
});




// Get classes & id of html elements with "forEach" Loop
console.log(`Get HTML Classes & ID with "forEach" Loop:`)

let htmlClasses=document.querySelectorAll(`div`);

htmlClasses.forEach((item)=>{
	item.addEventListener(`click`,()=>{
		let theClasses=item.classList; // This is important!
		let theID=item.id;

		if(theClasses==`two` && theID==`divTwo`){
			alert(`It's class is "two" & the id is "divTwo"`);
		}else{
			console.log(theClasses);
			console.log(theID);
		}
	});
});

