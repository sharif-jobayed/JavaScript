

let items=[
	{name:"Monitor",price:14000},
	{name:"Speaker",price:2500},
	{name:"Keyboard",price:400},
	{name:"Mouse",price:300},
	{name:"Casing",price:4000},
	{name:"Power Supply",price:7500},
	{name:"Motherboard",price:14000},
	{name:"Processor",price:27000},
	{name:"RAM",price:8500},
	{name:"HDD",price:4000}
];

// console.log(items[0].name);

function filterItemName(i){
	return i.name=="Processor";
}

function filterItemPrice(i){
	return i.price<=1000;
}

let filteredItemsName=items.filter(filterItemName);
console.log(filteredItemsName);

let filteredItemsPrice=items.filter(filterItemPrice);
console.log(filteredItemsPrice);


// console.log(filterItemName(items)); Why this does not work?

/*
let search=prompt("What are you looking for?");

for(let a=0;a<=items.length;a++){
	if(items[a].name==search){
		let statement=items[a];
		console.log(statement);
	}else{
		let statement="Item not found";
		console.log(statement);
	}
}
This pieces of code work but gives an error too */