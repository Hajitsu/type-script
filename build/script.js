"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
    }
    Object.defineProperty(Car.prototype, "setModel", {
        set: function (theModel) {
            this.model = theModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.foo = function (name) {
        console.log(this.bar(name));
    };
    return Car;
}());
var IranKhodro = /** @class */ (function (_super) {
    __extends(IranKhodro, _super);
    function IranKhodro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IranKhodro.prototype.bar = function (name) {
        return "hajitsu -> " + name;
    };
    return IranKhodro;
}(Car));
var car1 = new IranKhodro("206", 2020);
console.log(car1.foo("hamid"));
var Bike = /** @class */ (function () {
    function Bike(model, year) {
        this.model = model;
        this.year = year;
    }
    Bike.prototype.getModel = function () {
        return this.model;
    };
    return Bike;
}());
var bike1 = new Bike("Hyunda", 2020);
console.log(bike1.model);
console.log(bike1.year);
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.getInstance = function () {
        if (!Motor.instance) {
            Motor.instance = new Motor();
        }
        return Motor.instance;
    };
    return Motor;
}());
var motor1 = Motor.getInstance();
var motor2 = Motor.getInstance();
console.log(motor1 === motor2);
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "Size 10", xx: 120 };
printLabel(myObj);
var myObj2 = { size: 20, label: "Size 20" };
printLabel(myObj2);
var mySearch = function (source, subString) {
    return source.search(subString) > -1;
};
var Alex = /** @class */ (function () {
    function Alex(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    Alex.prototype.fullname = function () {
        return this.name + " " + this.family;
    };
    return Alex;
}());
var Hamid = /** @class */ (function () {
    function Hamid(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    Hamid.prototype.fullname = function () {
        return this.name + " " + this.family;
    };
    return Hamid;
}());
var Hajitsu = /** @class */ (function () {
    function Hajitsu(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    Hajitsu.prototype.fullname = function () {
        return this.name + " " + this.family;
    };
    return Hajitsu;
}());
var user = new Hamid("Hamid", "Mohammadi", 32);
console.log(user.fullname());
function logData(data) {
    return data;
}
function logArrayData(data) {
    return data;
}
console.log(logData("12345"));
console.log(logArrayData(["1", "2", "3", "4"]));
var list = [1, 2, 3, 4, 5];
var list1 = [1, 2, 3, 4, 5];
