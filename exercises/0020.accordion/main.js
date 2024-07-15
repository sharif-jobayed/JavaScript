

const accordion=document.querySelector(`.accordion`);
const accordionItem=document.querySelectorAll(`.accordionItem`);

accordionItem.forEach((item)=>{
	const accordionTitle=item.querySelector(`.accordionTitle`);
	const accordionContent=item.querySelector(`.accordionContent`);

	accordionTitle.addEventListener(`click`,()=>{
		for(let i=0;i<accordionItem.length;i++){
			if(accordionItem[i]!=item){
				accordionItem[i].classList.remove(`active`);
			}else{
				accordionItem[i].classList.toggle(`active`);
			}
		}
	});
});