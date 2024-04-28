

const mw2005 = {

	brand: `Need For Speed`,
	title: `Most Wanted`,
	blackListedRacersCount: 15,
	gameName: function() {
		return `The game is called ${this.brand} ${this.title} & it has ${this.blackListedRacersCount} blacklisted racers`;
	},
	blackListedRacersAndCars: {

		blackList01: {
			name: `Clarence "Razor" Callahan`,
			car: `BMW M3 GTR GT (E46)`,
			activity: function() {
				return `The racer's name is ${this.name} & he drives a ${this.car}`;
			},
		},
		blackList02: {
			name: `Toru "Bull" Sato`,
			car: `Mercedes-Benz SLR McLaren`,
			activity: function() {
				return `The racer's name is ${this.name} & he drives a ${this.car}`;
			},
		},
		blackList03: {
			name: `Ronald "Ronnie" McCrea`,
			car: `Aston Martin DB9`,
			activity: function() {
				return `The racer's name is ${this.name} & he drives a ${this.car}`;
			},
		},
		blackList04: {
			name: `Joe "JV" Vega`,
			car: `Dodge Viper SRT10`,
			activity: function() {
				return `The racer's name is ${this.name} & he drives a ${this.car}`;
			},
		},
		blackList05: {
			name: `Wes "Webster" Allen`,
			car: `Chevrolet Corvette C6`,
			activity: function() {
				return `The racer's name is ${this.name} & he drives a ${this.car}`;
			},
		},

	}

}

console.log(mw2005.gameName());
console.log(mw2005.blackListedRacersAndCars.blackList01.activity());