

const numbers=[500,200,400,100,300,278,189,443,267,322];
let largestNumber=0;
let secondLargestNumber=0;
let thirdLargestNumber=0;
let fourthLargestNumber=0;

for(let x=0;x<numbers.length;x++){
	if(numbers[x]>largestNumber){
		secondLargestNumber=largestNumber;
		largestNumber=numbers[x];		
	}else if(numbers[x]>secondLargestNumber){
		thirdLargestNumber=secondLargestNumber;
		secondLargestNumber=numbers[x];
	}else if(numbers[x]>thirdLargestNumber){
		fourthLargestNumber=thirdLargestNumber;
		thirdLargestNumber=numbers[x];
	}
}

console.log(largestNumber);
console.log(secondLargestNumber);
console.log(thirdLargestNumber);
console.log(fourthLargestNumber);