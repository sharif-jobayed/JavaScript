



const tButton=document.querySelector(`.tButton`);
let count=0;

tButton.textContent=`Start`;

tButton.addEventListener(`click`,()=>{

	count++;
	tButton.textContent=count;

});

