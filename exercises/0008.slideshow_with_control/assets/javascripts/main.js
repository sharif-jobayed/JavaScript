

const slides=document.querySelectorAll(`.slide`);
const btnPrev=document.querySelector(`.previous`);
const btnNext=document.querySelector(`.next`);
const dots=document.querySelectorAll(`.dot`);
let index=0;



function reset(){
	slides.forEach((slide)=>{
		slide.style.display=`none`;
	});
}

reset();
slides[index].style.display=`block`;
dots[index].classList.remove(`.activeDot`);

function slideNext(){
	reset();
	index++;
	for(let a=0;a<slides.length;a++){
		if(index>=slides.length){
			index=0;
			slides[index].style.display=`block`;
			dots[index].classList.add(`.activeDot`);
		}else{
			slides[index].style.display=`block`;
			dots[index].classList.add(`.activeDot`);
		}
	}
}

function slidePrev(){}

btnPrev.addEventListener(`click`,slidePrev);
btnNext.addEventListener(`click`,slideNext);