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
        return 'hajitsu -> ' + name;
    };
    return IranKhodro;
}(Car));
var car1 = new IranKhodro('206', 2020);
console.log(car1.foo('hamid'));
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
var bike1 = new Bike('Hyunda', 2020);
console.log(bike1.model);
