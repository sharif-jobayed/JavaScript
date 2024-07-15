


const container=document.querySelector(`.container`);
const checkbox=document.querySelectorAll(`.item input[type='checkbox']`);
const span=document.querySelectorAll(`.item span`);

// Check what I clicked
container.addEventListener(`click`,(e)=>{
	console.log(e.target);
});


checkbox.forEach((c)=>{
 c.addEventListener(`click`,()=>{
	console.log(c.nextElementSibling);
	c.nextElementSibling.classList.toggle(`crossed`);
 });
});