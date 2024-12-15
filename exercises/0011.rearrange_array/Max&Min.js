

const numbers=[400,500,300,200,600,100,800,1000,900,700];


let maxNum=0;
let minNum=100000;


function findMaxnMinNum(){
	for(let x=0;x<numbers.length;x++){
		if(numbers[x]>maxNum){
			maxNum=numbers[x];
		} else if(numbers[x]<minNum){
			minNum=numbers[x];
		}
	}
	console.log(`The highest is: ${maxNum}`);
	console.log(`The lowest is: ${minNum}`);
}

findMaxnMinNum();

