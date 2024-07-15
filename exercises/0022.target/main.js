

// Catch the body
const body=document.querySelector(`body`);

// Grab the target element
function grabElement(e){
	const el=e.target;
	const elDta=e.target.dataset.unique;
	
	console.dir(el);
	console.dir(elDta);
}

// Grab elements of the body
body.addEventListener(`click`,grabElement);

