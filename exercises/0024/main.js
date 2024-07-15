



const divOne=document.querySelector(`.one`);




// Q:"Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38".

// A1:
/*
var day=new Date().getDate();
var days=[`Saturday`,`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`];

console.dir(`Today is: ${days[day]}`);
*/

// A2:
/*
var hour=new Date().getHours();
var minute=new Date().getMinutes();
var second=new Date().getSeconds();

var currentHour;
var prepand;

function showTime(){

	setInterval(()=>{
		if(hour>=12){
			prepand=`PM`;
		}else{
			prepand=`AM`;
		}

		if(hour>=12){
			currentHour=hour-12;
		}else{
			currentHour=hour;
		}

		if(hour==0){
			currentHour=12;
			prepand=`AM`;
		}

		console.dir(`Current Time is: ${currentHour}:${minute}:${second} ${prepand}`);
		divOne.textContent=`Current Time is: ${currentHour}:${minute}:${second} ${prepand}`;

		},1000);
}

showTime();
*/


/*---------------------------------------------------------------------------------*/


// Q:"Write a JavaScript program to print the current window contents.".

// A:
/*
function showWindowContent(){
	console.dir(window.print());
}

showWindowContent();
*/


/*---------------------------------------------------------------------------------*/


