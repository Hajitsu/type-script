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

class Motor {
	private static instance: Motor;
	private constructor() {}
	public static getInstance(): Motor {
		if (!Motor.instance) {
			Motor.instance = new Motor();
		}
		return Motor.instance;
	}
}
let motor1: Motor = Motor.getInstance();
let motor2: Motor = Motor.getInstance();
console.log(motor1 === motor2);

interface myLabel {
	size: number;
	label: string;
	[propName: string]: any;
}
function printLabel(labelObj: myLabel): void {
	console.log(labelObj.label);
}
let myObj = { size: 10, label: 'Size 10', xx: 120 };
printLabel(myObj);
let myObj2 = { size: 20, label: 'Size 20' };
printLabel(myObj2);

interface funcSearch {
	(source: string, subString: string): boolean;
}
let mySearch: funcSearch = (source: string, subString: string) => {
	return source.search(subString) > -1;
};

interface iPerson {
	name: string;
	family: string;
	age: number;
	fullname(): string;
}
class Alex implements iPerson {
	constructor(public name: string, public family: string, public age: number) {}
	fullname(): string {
		return `${this.name} ${this.family}`;
	}
}
class Hamid implements iPerson {
	constructor(public name: string, public family: string, public age: number) {}
	fullname(): string {
		return `${this.name} ${this.family}`;
	}
}
class Hajitsu implements iPerson {
	constructor(public name: string, public family: string, public age: number) {}
	fullname(): string {
		return `${this.name} ${this.family}`;
	}
}
let user: iPerson = new Hamid('Hamid', 'Mohammadi', 32);
console.log(user.fullname());
