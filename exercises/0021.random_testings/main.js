

// console.log(`Main script is connected`);
// DOM elements
const divOne=document.querySelector(`#divOne`);


// Sort Strings
/*
let a=[`Tesla`,`BMW`,`Toyota`,`Mitsubishi`,`Nissan`,`Porshe`,`Audi`];

console.dir(a.sort());
console.dir(`The Variable 'a' is now, ${a}`);
*/


// Sort Numbers
/*
let b=[35,13,,313,11,31,351,31,31,5,51,351,3135,128];

console.dir(b.sort((a,b)=>{
	return a-b;
}));
console.dir(`The Variable 'b' is now, ${b}`);
*/


// Reverse Sort
/*
let a=[`Tesla`,`BMW`,`Toyota`,`Mitsubishi`,`Nissan`,`Porshe`,`Audi`];

console.log(a.sort().reverse());
*/


// Reverse Sort Numbers
/*
let b=[35,13,,313,11,31,351,31,31,5,51,351,3135,128];

console.log(b.sort((a,b)=>{
	return a-b;
}).reverse((a,b)=>{
	return a-b;
}));
*/


/*---------------------------------------------------------------------------------------------*/


// JS Sets
/*
let a=new Set([800,344,866,422,648,917]);
console.log(a.size);

if(a.has(800)){
	console.log(`It has 800`);
}else{
	console.log(`It has not 800`);
}


a.add(100,500);

if(a.has(100)){
	console.log(`It has 100`);
}else{
	console.log(`It has not 100`);
}

if(a.has(500)){
	console.log(`It has 500`);
}else{
	console.log(`It has not 500`);
}
*/


/*---------------------------------------------------------------------------------------------*/


// JS Maps
/*
let a=new Map([
	[1,10],
	[2,20],
	[3,30],
	[4,40],
	[5,50], // Key `5's` Value has been replaced by `60` later
	[5,60]
]);
console.log(a);

// Insert a pair in the `a`
a.set(6,60);
console.log(a);

// Loop through `a`
for(let i of a){
	console.log(`Now I am going through ${i}`);
}

// Get a value from `a`
console.log(`Key 3's value is ${a.get(3)}`);
*/


/*---------------------------------------------------------------------------------------------*/


// JS Error Handling
/*
try{
	let a=new Map([
		[1,10],
		[2,20],
		[3,30],
		[4,40],
		[5,50], // Key `5's` Value has been replaced by `60` later
		[5,60]
	]);
	console.log(a);
	
	// Insert a pair in the `a`
	a.set(6,60);
	console.log(a);
	
	// Loop through `a`
	for(let i of a){
		console.log(`Now I am going through ${i}`);
	}
	
	// Get a value from `a`
	console.lg(`Key 3's value is ${a.get(3)}`);
}catch(err){
	console.log(err);
}
*/


/*---------------------------------------------------------------------------------------------*/


// JS Class
/*
class Cls{
	constructor(name,country){
		this.n=name;
		this.c=country;
	}

	profession(p){
		return p;
	}
}

const Rajib=new Cls(`Rajib`,`Bangladesh`);

divOne.textContent=`He is called ${Rajib.n} & he is from ${Rajib.c} & he is a ${Rajib.profession(`Frontend Web Developer`)}.`;
*/


/*---------------------------------------------------------------------------------------------*/


// Object
/*
const gtr34={
	Brand:`Nissan`,
	Model:`GTR`,
	Version:34,
	ProductionYear:[`${1969} to ${1973}`,`${1989} to ${2002}`],
	Assembly:[`Musashimurayama, Japan	Omori`,`Japan (Z-Tune)`],
}

console.log(typeof(gtr34.ProductionYear))

for(let i=0;i<gtr34.ProductionYear.length;i++){
	console.log(gtr34.ProductionYear[i]);
}
*/


/*---------------------------------------------------------------------------------------------*/


// Function 0001
/*
const text=`Hello World!`;

function test_0001(a){
	console.log(a.toUpperCase());
}

test_0001(text);
*/


/*---------------------------------------------------------------------------------------------*/


// Object display
/*
const person={
	firstName:``,
	lastName:``,
	age:57,
	country:`US`,
	gameCharacter:true,
	// Method
	fullName:function(a,b){
		this.value1=a;
		this.value2=b;
		return this.value1+this.value2;
		// returns a+b;
	}
}

divOne.textContent=person.fullName(`Sharif `,`Jobayed `);
*/


/*---------------------------------------------------------------------------------------------*/


// Text carousel
/*
const titles = ["Apple", "Box", "Car"];
let currentIndex = 0; // Keeps track of the current item

function showCurrentItem() {
  divOne.textContent = titles[currentIndex];
}

// Function to go to the next item
function nextItem() {
  currentIndex = (currentIndex + 1) % titles.length;
  showCurrentItem();
}

// Initial display of the first item
showCurrentItem();

// Automatically cycle through items every 3 seconds (3000 milliseconds)
const intervalId = setInterval(nextItem, 1000);

// Stop the automatic cycling when needed (e.g., when user interacts with the carousel)
// clearInterval(intervalId);
*/


/*---------------------------------------------------------------------------------------------*/


// Another text Carousel
/*
const items=[`Honda`,`Suzuki`,`Yamaha`];
let itemIndex=0;

function itemDisplay(){
	divOne.textContent=items[itemIndex];
}

function nextItem(){
	itemIndex=(itemIndex+1)%items.length;
	itemDisplay();
}

itemDisplay();

setInterval(nextItem,1000);
*/


/*---------------------------------------------------------------------------------------------*/


// Object Constructor
/*
function Cons01(value01,value02,value03,value04){
	this.name=value01;
	this.age=value02;
	this.city=value03;
	this.language=value04;
}

const Rajib=new Cons01(`Rajib`,38,`Dhaka`,`Bangla`);
const Riad=new Cons01(`Riad`,33,`Toronto`,`English`);

for(let i in Rajib){
	console.log(Rajib[i]);
	console.log(Riad[i]);
}

divOne.textContent=`I am ${Rajib.name}, I am ${Rajib.age} years old. I live in ${Rajib.city} & I speak in ${Rajib.language}`;
divOne.textContent=`I am ${Riad.name}, I am ${Riad.age} years old. I live in ${Riad.city} & I speak in ${Riad.language}`;
*/

/*
const a=`Hello there!`;
const b=new String(`Hello there!`); // `String` is a built-in constructor, a instance of it is created with the `new` keyword

console.dir(typeof(a));
console.dir(typeof(b));

for(let i in b){
	console.dir(b[i]);
}
*/


/*---------------------------------------------------------------------------------------------*/


// Object and Array
/*
const a={
	one:1,
	two:2,
	three:3
}

const b=[1,2,3]

console.dir(a);
console.dir(b);
*/


/*---------------------------------------------------------------------------------------------*/


// Finding corresponding sibling elements
/*
// Select all <td> elements in the table
const tableCells = document.querySelectorAll('table tr td:nth-child(5)');

// Iterate through the selected <td> elements
tableCells.forEach((cell) => {
  // Check if the text content of the current cell is 'E'
  if (cell.textContent === 'E') {
    // Get the corresponding <td> in the same row with :nth-child(1)
    const correspondingCell = cell.parentElement.querySelector('td:nth-child(1)');
    
    // Do something with the corresponding cell
    console.log('Found "E", corresponding cell contains:', correspondingCell.textContent);
  }
});
*/


/*---------------------------------------------------------------------------------------------*/

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {
// 	let value=n;
//   return function() {
// 		let currentValue=value;
// 		value++;
// 		return currentValue;
// 	};
// };


//  const counter = createCounter(10)
//  console.log(counter());
//  console.log(counter());
//  console.log(counter());
//  console.log(counter());


 /*---------------------------------------------------------------------------------------------*/


/*
// object literals
const book1={
	name:`BookOne`,
	writer:`John Doe`,
	year:2013,
	summary:function(){
		return (`The book ${this.name} was written by ${this.writer} in the year ${this.year}.`);
	}
}


const book2={
	name:`BookTwo`,
	writer:`Robert Frost`,
	year:2015,
	summary:function(){
		return (`The book ${this.name} was written by ${this.writer} in the year ${this.year}.`);
	}
}

console.log(book2.summary());
*/


 /*---------------------------------------------------------------------------------------------*/


/*
// object constructor with class
class Book{
	constructor(title,writer,year){
		this.bookName=title;
		this.bookWriter=writer;
		this.publishingYear=year;
		this.summary=()=>{
			return `The book ${this.bookName} was written by ${this.bookWriter} & it was published in the year ${this.publishingYear}`;
		}
	}
}

const book1=new Book(`BookOne`,`John Doe`,2013);
const book2=new Book(`The Lord of the Rings`,`J. R. R. Tolkien`,1954);
const book3=new Book(`The Great Gatsby`,`F. Scott Fitzgerald`,1925);
const book4=new Book(`The Kite Runner`,`Khaled Hosseini`,2003);

console.log(book2.summary());
console.log(book1.summary());
*/


 /*---------------------------------------------------------------------------------------------*/

/*
 // object prototype
 class Book{
	constructor(title,writer,year){
		this.bookName=title;
		this.bookWriter=writer;
		this.publishingYear=year;
	}
}

// declaring a prototype
Book.prototype.summary=function(){
	return `The book ${this.bookName} was written by ${this.bookWriter} & it was published in the year ${this.publishingYear}`;
}

// declaring a prototype
Book.prototype.howLong=function(){
	let bookAge=new Date().getFullYear()-this.publishingYear;
	return `The book ${this.bookName} is now ${bookAge} years old.`;
}

const book1=new Book(`BookOne`,`John Doe`,2013);
const book2=new Book(`The Lord of the Rings`,`J. R. R. Tolkien`,1954);
const book3=new Book(`The Great Gatsby`,`F. Scott Fitzgerald`,1925);
const book4=new Book(`The Kite Runner`,`Khaled Hosseini`,2003);

console.log(book2.summary());
console.log(book1.summary());
console.log(book1.howLong());
/*

/*---------------------------------------------------------------------------------------------*/


/*
// Randomize array items order
let array=[`Nissan`,`Mazda`,`Toyota`,`Mitsubishi`];

function randOrder(){
	let randNum=Math.floor(Math.random()*4);

	for(let a of array){
		const rArr=a[randNum];
		console.log(rArr);
	}
}

randOrder();
*/