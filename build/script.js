"use strict";
var MyArray = /** @class */ (function () {
    function MyArray(data, ata2) {
        this.data = data;
        this.ata2 = ata2;
    }
    MyArray.prototype.addItem = function (item) {
        this.data.push(item);
    };
    MyArray.prototype.getItem = function (index) {
        return this.data[index];
    };
    return MyArray;
}());
var myList = new MyArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [true, false]);
var myList2 = new MyArray(["1", "2", "3", "4", "5", "6", "7", "8", "9"], [true, true, true, false]);
console.log(myList);
myList.addItem(10);
console.log(myList.data);
function logParams(x, y) {
    console.log(x, y);
}
logParams("hajitsu", true);
