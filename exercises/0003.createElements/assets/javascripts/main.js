

//Grab the Body
const body=document.body;

//Create Elements
const divA=document.createElement("div");
const divB=document.createElement("div");
const divC=document.createElement("div");
const divD=document.createElement("div");
var divs=[];

//Assign CSS-Classes to the Elements
divA.classList.add("class01");
divB.classList.add("class02");
divC.classList.add("class03");
divD.classList.toggle("class05");

//Add Elements to the Body
body.append(divA);
body.append(divB);
body.append(divC);
body.append(divD);

//Add Text in an Element
divA.textContent="Hello, this is divA";
divC.innerHTML="<b>Hello, it's Bold</b>"

//Remove an Element
divB.remove();

//The entire task with a Loop
for(let a=0;a<10;a++){
	//Create Elements
	divs[a]=document.createElement("div");
	//Place Elements on the Page
	body.append(divs[a]);
	//Assign Classes to the Elements
	divs[a].classList.add("class04");
	//Add a specific Text in an Element
	if(a===7){
		divs[a].innerHTML=`Hi, the Text is <i>Italic</i>`;
		//Grab the Class of the Element
		let divs7class=divs[a].getAttribute("class");
		console.log(divs7class);
		//Set an ID to the Element
		divs[a].setAttribute("id","divs7");
		//Grab the ID of the Element
		let divs7id=divs[a].getAttribute("id");
		console.log(divs7id);
	}else{
		divs[a].innerHTML=`Hi, the Text is <u>Underlined</u>`;
	}
}

