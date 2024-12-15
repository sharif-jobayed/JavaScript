

const numbers=[400,500,300,200,600,100,800,1000,900,700];

let largestNumber=0;
let secondLargestNumber=0;
let thirdLargestNumber=0;

for(let x=0;x<numbers.length;x++){

	if(numbers[x]>largestNumber){
		secondLargestNumber=largestNumber;
		largestNumber=numbers[x];
	} else if(numbers[x]>secondLargestNumber){
		thirdLargestNumber=secondLargestNumber;
		secondLargestNumber=numbers[x];
	} else if(numbers[x]>thirdLargestNumber){
		thirdLargestNumber=numbers[x];
	}

}

console.log(largestNumber);
console.log(secondLargestNumber);
console.log(thirdLargestNumber);