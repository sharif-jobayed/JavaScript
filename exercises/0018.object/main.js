

const car={
	Brand:`Toyota`,
	Model:`Supra MK4`,
	Year:1993,
	Wheels:4,
	Doors:2,

	CarFunctions:{
		car:this,
		Start:function(){
			console.log(`${this.car.Model} has started!`);
		},
		TurnOff:function(){
			console.log(`${this.car.Start()}. Now Turn it off.`);
		},
	}
}

// console.dir(typeof(car.CarFunctions.Start()));
console.dir(car.CarFunctions.TurnOff());

// The code did not work