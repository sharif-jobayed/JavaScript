

/*
const pageElements=[
	section=document.querySelector(`section`),
	div=document.querySelectorAll(`div`)
]

for(let i=0;i<pageElements.length;i++){
	console.log(pageElements[i]);
}

let searchRoot=pageElements.includes(div);
if(searchRoot){
	let itemPosition=pageElements.indexOf(searchRoot);
	console.log(`Item found & it's positin is ${itemPosition}`);

	const divs=pageElements[1];
	for(let i=0;i<divs.length;i++){
		console.log(divs[i]);
	}
}else{
	console.log(`Item not found`);
}
*/




const elements=[
	section=document.querySelector(`section`),
	div=document.querySelectorAll(`div`),
];

console.log(elements.indexOf(div));

let div01=elements[1][0];
console.log(div01);
div01.style.position=`absolute`;
div01.style.height=`100px`;
div01.style.width=`100px`;
div01.style.border=`1px solid #000`;
div01.style.backgroundColor=`aqua`;
div01.style.borderRadius=`50%`;