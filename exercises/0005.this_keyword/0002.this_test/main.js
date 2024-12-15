


// Perfectly WORKED!!

const blocks=document.querySelector(`.block`);
const block=document.querySelectorAll(`.block`);

for(let i=0;i<block.length;i++){
	block[i].textContent=`${i+1}`;
}

function clicked(){
	let data=this.dataset.cell;
	console.log(data);
}

for(let i=0;i<block.length;i++){
	block[i].addEventListener(`click`,clicked);
}
