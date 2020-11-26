abstract class Car {
	protected model: string;
	public year: number;
	constructor(model: string, year: number) {
		this.model = model;
		this.year = year;
	}
	set setModel(theModel: string) {
		this.model = theModel;
	}
	get getModel() {
		return this.model;
	}
	abstract bar(name: string): string;
	foo(name: string): void {
		console.log(this.bar(name));
	}
}
class IranKhodro extends Car {
	bar(name: string) {
		return 'hajitsu -> ' + name;
	}
}
let car1 = new IranKhodro('206', 2020);
console.log(car1.foo('hamid'));

class Bike {
	public readonly model: string;
	public year: number;
	constructor(model: string, year: number) {
		this.model = model;
		this.year = year;
	}
	getModel() {
		return this.model;
	}
}

let bike1 = new Bike('Hyunda', 2020);
console.log(bike1.model);
console.log(bike1.year);
