

const button=document.querySelectorAll("button");


function getValue(){
	let btnValue=this.dataset.btn;
	console.log(btnValue);
}

for(let b=0;b<button.length;b++){
	button[b].addEventListener("click",getValue);
}

