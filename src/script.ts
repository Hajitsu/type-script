// function auth<T extends { new (...args: any[]): any }>(constructor: T) {
//   console.log(constructor);
//   return class extends constructor {
//     auth = false;
//   };
// }
// @auth
// class User {
//   constructor(public message: string) {}
//   name = "hajitsu";
// }
// let user1 = new User("hello hajitsu");
// console.log(user1);
/********************** */
// function first<T extends { new (...args: any[]): any }>(constructor: T) {
// 	console.log(constructor);
// 	return class extends constructor {
// 		property = "first property";
// 	};
// }
// function second<T extends { new (...args: any[]): any }>(constructor: T) {
// 	console.log(constructor);
// 	return class extends constructor {
// 		property = "second property";
// 	};
// }

// @first
// @second
// class Person {
// 	name = "Person Name";
// }
// let person = new Person();
// console.log(person);
/********************** */
// function authFactory(value: boolean) {
//   return function auth<T extends { new (...args: any[]): any }>(constructor: T) {
//     console.log(constructor);
//     return class extends constructor {
//       auth = value;
//     };
//   };
// }
// function changeable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(target[propertyKey]);
//     descriptor.writable = false;
//   };
// }
// @authFactory(false)
// class User {
//   private name = "hajitsu";
//   @changeable(false)
//   getName() {
//     return this.name;
//   }
// }
// let user1 = new User();
// console.log(user1);
// user1.getName = () => "hamid";
// console.log(user1.getName());

// function Emoji() {
// 	return function (target: any, key: string | symbol) {
// 		let val = target[key];
// 		Object.defineProperty(target, key, {
// 			get: () => val,
// 			set: (newVal) => {
// 				val = `🍦 ${newVal} 🍦`;
// 			},
// 			configurable: true,
// 			enumerable: true,
// 		});
// 	};
// }

// function Log(target: any, methodKey: string | symbol, parameterIndex: number) {
// 	console.log(target, methodKey, parameterIndex);
// }

// class IceCream {
// 	@Emoji()
// 	flavor = 'Vanile';
// 	getInfo(@Log name: string) {}
// }
// let i = new IceCream();
// console.log(i.flavor);
// console.log(i.getInfo('hajitsu'));

import Logger from './logger';
Logger.success('hi hajitsu');
