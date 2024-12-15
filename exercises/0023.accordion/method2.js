



function hideAllDetails(){
	for(let a of accordionDetails){
		a.classList.add(`hidden`);
	}
}
hideAllDetails();


for(let a of accordionTitle){
	a.addEventListener(`click`,expandDetails);
}


function expandDetails(e){
	if(e){
		const cls=e.target.parentElement.children[1];
		cls.classList.toggle(`hidden`);
		cls.classList.toggle(`shown`);
	}else{
		hideAllDetails();
	}
}