"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function Emoji() {
    return function (target, key) {
        var val = target[key];
        Object.defineProperty(target, key, {
            get: function () { return val; },
            set: function (newVal) {
                val = "\uD83C\uDF66 " + newVal + " \uD83C\uDF66";
            },
            configurable: true,
            enumerable: true,
        });
    };
}
function Log(target, propertyKey, parameterIndex) {
}
var IceCream = /** @class */ (function () {
    function IceCream() {
        this.flavor = "Vanile";
    }
    IceCream.prototype.getInfo = function (name) { };
    __decorate([
        Emoji()
    ], IceCream.prototype, "flavor", void 0);
    __decorate([
        __param(0, Log)
    ], IceCream.prototype, "getInfo", null);
    return IceCream;
}());
var i = new IceCream();
console.log(i.flavor);
