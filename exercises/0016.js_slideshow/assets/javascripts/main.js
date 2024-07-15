

// Create variables
const slides=document.querySelectorAll(`.slide`);
const dots=document.querySelectorAll(`.dot`);
const btnPrev=document.querySelector(`.btnPrev`);
const btnNext=document.querySelector(`.btnNext`);
let index=0;


// Reset slides
function reset(){
	for(let i=0;i<slides.length;i++){
		slides[i].style.display=`none`;
		dots[i].classList.remove(`activeDot`);
	}
}
reset();
slides[index].style.display=`block`;


// Next slide
function nextSlide(){
	reset();
	index+=1;
	if(index>=slides.length){
		index=0;
		slides[index].style.display=`block`;
		dots[index].classList.add(`activeDot`);
	}else{
		slides[index].style.display=`block`;
		dots[index].classList.add(`activeDot`);
	}
}


// Previous slide
function prevSlide(){
	reset();
	index-=1;
	if(index<0){
		index=slides.length-1;
		slides[index].style.display=`block`;
		dots[index].classList.add(`activeDot`);
	}else{
		slides[index].style.display=`block`;
		dots[index].classList.add(`activeDot`);
	}
}


// Events
btnPrev.addEventListener(`click`,prevSlide);
btnNext.addEventListener(`click`,nextSlide);


// Autoslide
function autoSlide(){
	reset();
	slides[index].style.display=`block`;
	dots[index].classList.add(`activeDot`);
	index+=1;
	if(index>=slides.length){
		index=0;
	}
	setTimeout(autoSlide,2000);
}
autoSlide();